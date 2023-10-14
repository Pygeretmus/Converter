import { Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
 selector: 'app-convertation',
 templateUrl: './convertator.component.html',
 styleUrls: ['./convertator.component.css']
})

export class ConvertatorComponent{
    @Input() currency: Record<string, number>

    @ViewChild("first") first_convertor: ElementRef;
    @ViewChild("second") second_convertor: ElementRef;
    @ViewChild("first_symbol") first_symbol: ElementRef;
    @ViewChild("second_symbol") second_symbol: ElementRef;


    calculate(number:number){   
        var operate: string = this.first_symbol.nativeElement.value + this.second_symbol.nativeElement.value // creating a dictionary access code
        if (number === 1){
            if (this.second_convertor.nativeElement.value < 0){
                this.second_convertor.nativeElement.value = 0}
            this.first_convertor.nativeElement.value = (this.second_convertor.nativeElement.value / this.currency[operate]).toFixed(2)
        }
        if(number === 2){
            if (this.first_convertor.nativeElement.value < 0){
                this.first_convertor.nativeElement.value = 0}
            this.second_convertor.nativeElement.value = (this.first_convertor.nativeElement.value * this.currency[operate]).toFixed(2)
        }
    }
}