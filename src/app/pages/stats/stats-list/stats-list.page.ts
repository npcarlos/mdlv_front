import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-list',
  templateUrl: './stats-list.page.html',
  styleUrls: ['./stats-list.page.scss'],
})
export class StatsListPage implements OnInit {

  private fechaMinima:any;
  private today:any;
  private initial_date:Date;
  private final_date:Date;

  constructor() { }

  ngOnInit() {
  }


  
  ionViewDidEnter()
  {
    this.fechaMinima = new Date().toISOString();
    this.today = new Date().toISOString();
    this.final_date = this.today;
    this.initial_date = this.today;
    //this.initial_date.setDate(this.today.getDate() - 30);
  }

}
