import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';





@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {

   ownerName: string ="Rashmirekha Jena";
   pageTitle: string = "Product List";
   listFilter:string ="";

   showImage: boolean = false;
   products: IProduct[]= [{
    "title": "Brown eggs",
    "description": "Raw organic brown eggs in a basket",
    "filename": "0.jpg",
    "height": 600,
    "width": 400,
    "price": 28.1,
    "rating": 5,
    "imageUrl":"../../../assets/images/product4.jpg",
  }, {
    "title": "Sweet fresh stawberry",
  
    "description": "Sweet fresh stawberry on the wooden table",
    "filename": "1.jpg",
    "height": 450,
    "width": 299,
    "price": 29.45,
    "rating": 4.5,
    "imageUrl":"../../../assets/images/product4.jpg",
  }, {
    "title": "Asparagus",
  
    "description": "Asparagus with ham on the wooden table",
    "filename": "2.jpg",
    "height": 450,
    "width": 299,
    "price": 18.95,
    "rating": 3,
    "imageUrl":"../../../assets/images/product4.jpg",
  }, {
    "title": "Green smoothie",
   
    "description": "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
    "filename": "3.jpg",
    "height": 600,
    "width": 399,
    "price": 17.68,
    "rating": 4,
    "imageUrl":"../../../assets/images/product4.jpg",
  }, {
    "title": "Raw legums",
   
    "description": "Raw legums on the wooden table",
    "filename": "4.jpg",
    "height": 450,
    "width": 299,
    "price": 17.11,
    "rating": 2,
    "imageUrl":"../../../assets/images/product1.jpg",
  }, {
    "title": "Hazelnut in black ceramic bowl",
   
    "description": "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
    "filename": "7.jpg",
    "height": 450,
    "width": 301,
    "price": 27.35,
    "rating": 0,
    "imageUrl":"../../../assets/images/product1.jpg",
  }, {
    "title": "Fresh stawberry",
    
    "description": "Sweet fresh stawberry on the wooden table",
    "filename": "8.jpg",
    "height": 600,
    "width": 399,
    "price": 28.59,
    "rating": 4,
    "imageUrl":"../../../assets/images/product1.jpg",
  },{
    "title": "Fresh tomato",
 
    "description": "Fresh tomato juice with basil",
    "filename": "12.jpg",
    "height": 600,
    "width": 903,
    "price": 16.3,
    "rating": 2,
    "imageUrl":"../../../assets/images/product1.jpg",
  }, ]

   toggleImage(): void {
     this.showImage = !this.showImage;
   }
  constructor() { }

  ngOnInit(): void {
    console.log('In---OnInit');
  }

}
