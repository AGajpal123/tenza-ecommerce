import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  lastCard = [
    {
      title: 'Free Shipping & Return',
      description: 'Free worldwide shipping on all Area order above Rs.1000',
      icon:"fa fa-truck"
    },
    {
      title: 'Shop With Confidence',
      description:
        'Our Buyer Protection covers your purchase from click to delivery',
        icon:"fa fa-shopping-cart"
    },
    {
      title: 'Safe Payment',
      description:
        'Pay with the world’s most popular and secure payment methods',
        icon:"fa fa-credit-card-alt"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
