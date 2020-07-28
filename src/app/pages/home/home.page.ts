import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public dateCurrent;
  constructor() { }

  ngOnInit() {
    this.dateCurrent = new Date();
  }

}
