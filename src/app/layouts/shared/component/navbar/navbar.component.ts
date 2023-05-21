import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed: boolean = true;
  isDropdownCollapsed: boolean = true;
  isAboutDropdownOpen : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }


  toggleAboutDropdown(open: boolean): void {
    this.isAboutDropdownOpen = open;
  }

}
