import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counsellors',
  templateUrl: './counsellors.component.html',
  styleUrls: ['./counsellors.component.scss']
})
export class CounsellorsComponent implements OnInit {
  isLoggedIn = false;
  constructor() { }

  ngOnInit(): void {
  }

}
