import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/services/productlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];
  posts:any;

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
      });
}

  constructor(private service:ProductlistService) {
    this.products = [
      new Product(
        '1',
        'Black Lentils',
        '/assets/black_lentils.jpg',
        ['Small - 2 lbs'],
       200
      ),
      new Product(
        '2',
        'Brown Winter Shoes',
        '/assets/shoes.jpg',
        ['10', '11', '12', '13'],
        642
      ),
      new Product(
        '3',
        'Tissue Papers',
        '/assets/tissues.jpg',
        [''],
        2000
      )
    ];
  }
}

export class Product{
id: string;
name: string;
image: string;
size: string[];
quantity: number;

constructor(id:any, name:any, image:any, size:any, quantity:any){
this.id = id;
this.name = name;
this.image = image;
this.size = size;
this.quantity = quantity;
}
}
