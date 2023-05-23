import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];
  productList = [
    {
      image: '../../../../assets/products/1.jpg',
      name: 'amrat noni juice',
      price: '850.00',
      originalPrice: '1000',
    },
    {
      image: '../../../../assets/products/2.jpg',
      name: 'livorex juice',
      price: '580.00',
      originalPrice: '1000',
    },
    {
      image: '../../../../assets/products/3.jpeg',
      name: 'gynoex juice',
      price: '850.00',
      originalPrice: '1000',
    },
    {
      image: '../../../../assets/products/4.jpeg',
      name: 'diobex juice',
      price: '850.00',
      originalPrice: '1000',
    },
    {
      image: '../../../../assets/products/5.jpeg',
      name: 'stonex juice',
      price: '850.00',
      originalPrice: '1000',
    },
    {
      image: '../../../../assets/products/6.jpeg',
      name: 'Cardionex',
      price: '850.00',
      originalPrice: '1000',
    },
    {
      image: '../../../../assets/products/7.jpeg',
      name: 'Cardionex',
      price: '850.00',
      originalPrice: '1000',
    },
    {
      image: '../../../../assets/products/8.jpeg',
      name: 'Cardionex',
      price: '850.00',
      originalPrice: '1000',
    },
    {
      image: '../../../../assets/products/9.jpeg',
      name: 'Cardionex',
      price: '850.00',
      originalPrice: '1000',
    },
    
  ];


  brands = [
    '../../../../assets/brands/brand1.png',
    '../../../../assets/brands/brand2.png',
    '../../../../assets/brands/brand3.png',
    '../../../../assets/brands/brand4.png',
  ];
  constructor() {}

  ngOnInit(): void {}

   scrollCardContainer(scrollOffset:any) {
    const cardContainer = document.querySelector('.card-container') as HTMLElement;
    cardContainer.scrollBy({
      left: scrollOffset,
      behavior: 'smooth'
    });
  }
}
