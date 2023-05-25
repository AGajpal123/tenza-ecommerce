import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed: boolean = true;
  isDropdownCollapsed: boolean = true;
  isAboutDropdownOpen : boolean = false;
  mobile = "+91-7880001480";
  email = "support@tenza.com"
  isNavbarSticky = false;
  items = [
    'Sort By Average Rating',
    'Sort By Popularity',
    'Sort By Newness',
    'Sort By Price : Low to High',
    'Sort By Price : High to Low',
    'Product Name : Z'
  ];
  constructor() { }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavbarSticky = (window.pageYOffset > 0);
  }
  
  ngOnInit(): void {
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }


  toggleAboutDropdown(open: boolean): void {
    this.isAboutDropdownOpen = open;
  }

  

}
