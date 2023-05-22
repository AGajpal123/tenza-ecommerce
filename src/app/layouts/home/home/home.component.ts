import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];
  productList = [
    {
      image : '../../../../assets/products/1.jpg',
      name : 'amrat noni juice',
      price : '850.00',
      originalPrice:'1000'
    },
    {
      image : '../../../../assets/products/2.jpg',
      name : 'livorex juice',
      price : '580.00',
      originalPrice:'1000'
    },
    {
      image : '../../../../assets/products/3.jpeg',
      name : 'gynoex juice',
      price : '850.00',
      originalPrice:'1000'
    },
    {
      image : '../../../../assets/products/4.jpeg',
      name:'diobex juice',
      price : '850.00',
      originalPrice:'1000'
    },
    {
      image : '../../../../assets/products/5.jpeg',
      name : 'stonex juice',
      price : '850.00',
      originalPrice:'1000'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  

}
