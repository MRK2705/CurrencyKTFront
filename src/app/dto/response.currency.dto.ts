import {QueryDto} from "./query.dto";
import {InfoDto} from "./info.dto";

export interface ResponseCurrencyDto {
  success: boolean,
  query: QueryDto,
  info: InfoDto,
  date: string,
  result: number
}
