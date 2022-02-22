import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styles: [],
})
export class StartPageComponent implements OnInit {
  public d = new Date();
  // public year = this.d.getFullYear();
  // public age = this.year - 2001;
  public dob = new Date('04/14/2001');
public month_diff = Date.now() - this.dob.getTime();
//convert the calculated difference in date format
public age_dt = new Date(this.month_diff);
//extract year from date
public year = this.age_dt.getUTCFullYear();
//now calculate the age of the user
public age = Math.abs(this.year - 1970);

  constructor() {}

  ngOnInit(): void {}
}
