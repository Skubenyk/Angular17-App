import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Best shop';
  products: IProduct[] = [];
  loading = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe((products: IProduct[]) => {
      this.products = products;
      this.loading = false;
    });
  }
}
