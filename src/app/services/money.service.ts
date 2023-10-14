import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Observable, timer } from "rxjs"
import { ICoin } from "../models/money/money.module";
import { mergeMap, retryWhen } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class MoneyService {
    constructor(private http: HttpClient) {
    }

    getAll(): Observable<ICoin[]> {
        return this.http.get<ICoin[]>("https://api.monobank.ua/bank/currency", { params: new HttpParams().append('limit', '3') })
            .pipe(
                retryWhen(errors => errors.pipe(
                    mergeMap((error, index) => {
                        if (error.status === 429) { // Monobank does not like frequent requests for its API
                            return timer(10000);
                        }
                        throw error;
                    })
                ))
            );
    }
}
