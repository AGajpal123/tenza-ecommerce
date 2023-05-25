import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  sizes: any[] = ['NA', 'M', 'S', 'XS', 'XL', 'XXL'];
  colors : any [] = ['Black','Blue','Brown','Green','Pink']
  items : any [] = [
    'Sort By Average Rating',
    'Sort By Popularity',
    'Sort By Newness',
    'Sort By Price : Low to High',
    'Sort By Price : High to Low',
    'Product Name : Z'
  ];
  selectedItem =  'Sort By Average Rating';
  productList = [
    {
      image: '../../../../assets/products/1.jpg',
      name: 'amrat noni juice',
      dp: '850.00',
      mrp: '1000',
      bv : '200',
      quantity : 'TZ'
    },
    {
      image: '../../../../assets/products/2.jpg',
      name: 'livorex juice',
      dp: '580.00',
      mrp: '1000',
      bv : '200',
      quantity : 'TZ'
    },
    {
      image: '../../../../assets/products/3.jpeg',
      name: 'gynoex juice',
      dp: '850.00',
      mrp: '1000',
      bv : '200',
      quantity : 'TZ'
    },
    {
      image: '../../../../assets/products/4.jpeg',
      name: 'diobex juice',
      dp: '850.00',
      mrp: '1000',
      bv : '200',
      quantity : 'TZ'
    },
    {
      image: '../../../../assets/products/5.jpeg',
      name: 'stonex juice',
      dp: '850.00',
      mrp: '1000',
      bv : '200',
      quantity : 'TZ'
    },
    {
      image: '../../../../assets/products/6.jpeg',
      name: 'Cardionex',
      dp: '850.00',
      mrp: '1000',
      bv : '200',
      quantity : 'TZ'
    },
    {
      image: '../../../../assets/products/7.jpeg',
      name: 'Cardionex',
      dp: '850.00',
      mrp: '1000',
      bv : '200',
      quantity : 'TZ'
    },
    {
      image: '../../../../assets/products/8.jpeg',
      name: 'Cardionex',
      dp: '850.00',
      mrp: '1000',
      bv : '200',
      quantity : 'TZ'
    },
    {
      image: '../../../../assets/products/9.jpeg',
      name: 'Cardionex',
      price: '850.00',
      mrp: '1000',
      bv : '200',
      quantity : 'TZ'
    },
    
  ];
  maxValue = 500;
  minValue = 100;
  // minMaxValue = 100;
  // minValue = 100;
  // maxValue = 500;
  constructor() { }

  ngOnInit(): void {
  }



  // updateMaxValue() {
  //   if (this.minValue > this.maxValue) {
  //     this.maxValue = this.minValue;
  //   }
  // }

  // updateMinValue() {
  //   if (this.minValue > this.maxValue) {
  //     this.minValue = this.maxValue;
  //   }
  // }

  

}
