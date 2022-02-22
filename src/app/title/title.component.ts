import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styles: [],
})
export class TitleComponent implements OnInit {
  public d = new Date();
  // public year = this.d.getFullYear();
  // public age = this.year - 2001;
  public prog = new Date('04/14/2013');
  public prof = new Date('01/01/2021');
  public prog_month_diff = Date.now() - this.prog.getTime();
  public prof_month_diff = Date.now() - this.prof.getTime();
  //convert the calculated difference in date format
  public prog_age_dt = new Date(this.prog_month_diff);
  public prof_age_dt = new Date(this.prof_month_diff);
  //extract year from date
  public prog_year = this.prog_age_dt.getUTCFullYear();
  public prof_year = this.prof_age_dt.getUTCFullYear();
  //now calculate the age of the user
  public prog_age = Math.abs(this.prog_year - 1970);
  public prof_age = Math.abs(this.prof_year - 1970);
  
  constructor() {}

  ngOnInit(): void {}
}
