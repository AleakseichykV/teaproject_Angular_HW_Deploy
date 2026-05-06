import {Injectable} from "@angular/core";
import {TeaCardType} from "../types/tea.card.type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderDataType} from "../types/order.data.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }
  getTeaCards():Observable<TeaCardType[]> {
    return this.http.get<TeaCardType[]>('https://testologia.ru/tea');
  }

  getTeaCard(id: number): Observable<TeaCardType> {
    return this.http.get<TeaCardType>(`https://testologia.ru/tea?id=${id}`);
  }

  createOrder(data: OrderDataType) {
    return this.http.post<{ success: boolean, message?: string }>('https://testologia.ru/order-tea', data);
  }
}




