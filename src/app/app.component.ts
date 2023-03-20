import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CurrencyService} from "./service/currency.service";
import {ResponseCurrencyDto} from "./dto/response.currency.dto";
import {ChangeDto} from "./dto/change.dto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'software';

  currencyForm: FormGroup;

  responseCurrencyDto: ResponseCurrencyDto;

  data: ChangeDto[];
  page: number=0;
  totalpage: number=0;

  ngOnInit(): void {
    this.currencyService.getChangesList().subscribe({
      next: (response: any) => {
        console.log('invocacion exitosa');
        console.log(response);
        this.data = response.content;
        this.totalpage = response.totalPages;
        console.log('resultado');
        console.log(this.data);
      }
    })
  }

  constructor(private formBuilder: FormBuilder, private currencyService: CurrencyService) {
    this.currencyForm = this.formBuilder.group({
      from: '',
      to: '',
      amount: ''
    })
  }

  submit() {
    console.log(this.currencyForm.value);
    this.currencyService.convertCurrency(this.currencyForm.value.from,
      this.currencyForm.value.to,
      this.currencyForm.value.amount).subscribe({
        next: (response: ResponseCurrencyDto) => {
          console.log('invocacion exitosa');
          console.log(response);
          this.responseCurrencyDto = response;
          console.log('resultado');
          console.log(this.responseCurrencyDto.result);
        }
    })
    console.log('test');
  }
}

