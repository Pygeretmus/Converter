import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})

export class NamePipe implements PipeTransform{
    transform(value:number): string {
        if (value === 978){
            return "Євро (EUR)"
        }
        if (value === 840){
            return "Долар (USD)"
        }
        if (value === 980){
            return "Українська гривня (UAH)"
        }
        return "Неправильний код"
    }
}