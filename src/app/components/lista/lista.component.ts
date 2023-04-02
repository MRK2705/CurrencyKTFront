import { Component } from '@angular/core';
import {CurrencyService} from "../../service/currency.service";
import {ChangeDto} from "../../dto/change.dto";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  page1: number=0;
  totalpage1: number=0;

  constructor(private currencyService: CurrencyService) {

  }
   data!: ChangeDto[];
  // totalpage: number=0;

  ngOnInit(): void {
    this.currencyService.getChangesList(this.page1).subscribe({
      next: data => {
        this.data = data['content'];
        this.totalpage1 = data['totalPages'];
      }
    })
    this.currencyService.getChangesList(this.page1).subscribe({
      next:data=>{
        this.data= data.content;
        this.totalpage1 = data.totalPages;
      }
    })
  }

  pageCount(){
    if (this.page1 < this.totalpage1){
      this.page1++;
      this.currencyService.getChangesList(this.page1).subscribe({
        next:data=>{
          this.data= data['content'];
          this.totalpage1 = data['totalPages'];
        }
      })
    }
  }

  pageDown(){
    if (this.page1 != 0){
      this.page1--;
      this.currencyService.getChangesList(this.page1).subscribe({
        next:data=>{
          this.data= data['content'];
          this.totalpage1 = data['totalPages'];
        }
      })
    }
  }

  displayData: string[] = ['ID', 'FROM', 'TO', 'AMOUNT', 'DATE', 'RESULT'];

  applyOriginCurrencyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.changeDto = this.changeDto.filter(change => change.from.toLowerCase().includes(filterValue.toLowerCase()));
  }

  applyTargetCurrencyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.changeDto = this.changeDto.filter(change => change.to.toLowerCase().includes(filterValue.toLowerCase()));
  }

  applyCurrencyAmountFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.changeDto = this.changeDto.filter(change => change.amount.toString().includes(filterValue));
  }


  applyResultFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.changeDto = this.changeDto.filter(change => change.result.toString().includes(filterValue));
  }
}
