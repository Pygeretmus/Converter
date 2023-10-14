import { Component, Input } from "@angular/core";
import { ICoin } from "src/app/models/money/money.module";


@Component({
 selector: 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.css']
})

export class HeaderComponent{
    @Input() money: ICoin
}
