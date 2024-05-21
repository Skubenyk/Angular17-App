import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
          fromObject: { limit: 5 },
        }),
      })
      .pipe(delay(2000));
  }
}
