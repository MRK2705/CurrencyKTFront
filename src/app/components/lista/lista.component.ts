import { Component } from '@angular/core';
import {CurrencyService} from "../../service/currency.service";
import {ChangeDto} from "../../dto/change.dto";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  changeDto: ChangeDto[];
  page: number=0;
  totalpage: number=0;

  constructor(private currencyService: CurrencyService) {

  }

  ngOnInit(){
    this.currencyService.getCurrencyList().subscribe({
      next:data=>{
        this.changeDto= data.content;
        this.totalpage = data.totalPages;
      }
    })
  }

  pageCount(){
    if (this.page < this.totalpage){
      this.page++;
      this.currencyService.getCurrencyList().subscribe({
        next:data=>{
          this.changeDto= data.content;
          this.totalpage = data.totalPages;
        }
      })
    }
  }

  pageDown(){
    if (this.page != 0){
      this.page--;
      this.currencyService.getCurrencyList().subscribe({
        next:data=>{
          this.changeDto= data.content;
          this.totalpage = data.totalPages;
        }
      })
    }
  }

  displayData: string[] = ['ID', 'FROM', 'TO', 'AMOUNT', 'DATE', 'RESULT'];

}
