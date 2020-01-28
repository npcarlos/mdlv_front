import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { RestApiService } from 'src/app/api/services/rest-api.service';


import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';


@Component({
  selector: 'app-stats-list',
  templateUrl: './stats-list.page.html',
  styleUrls: ['./stats-list.page.scss'],
})
export class StatsListPage implements OnInit {

  fechaMinima:any;
  today:any;
  initial_date:Date;
  final_date:Date;


  mes;

  barData = [
    { season: 'S1', viewers: 2500000 },
    { season: 'S2', viewers: 3800000 },
    { season: 'S3', viewers: 5000000 },
    { season: 'S4', viewers: 6900000 },
    { season: 'S5', viewers: 6900000 },
    { season: 'S6', viewers: 7500000 },
    { season: 'S7', viewers: 10000000 },
    { season: 'S8', viewers: 17000000 }
  ];
  title = 'Game of Thrones';
  subtitle = 'Viewers per season for';
  width: number;
  height: number;
  margin = { top: 20, right: 20, bottom: 30, left: 40 };
  x: any;
  y: any;
  svg: any;
  g: any;

  constructor(
    private _platform: Platform,
    public api: RestApiService
  ) 
  {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {
  }

  cambiarMes(mes)
  {
    this.mes = mes;
    this.getProducts();
  }

  ionViewDidEnter() {
    this.drawBarChart();

    this.fechaMinima = new Date().toISOString();
    this.today = new Date().toISOString();
    this.final_date = this.today;
    this.initial_date = this.today;
    //this.initial_date.setDate(this.today.getDate() - 30);

    this.getProducts();
  }

  drawBarChart()
  {
    this.init();
    this.initAxes();
    this.drawAxes();
    this.drawChart();
  }

  init() {
    this.svg = d3.select('#barChart')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 900 500');
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  initAxes() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.barData.map((d) => d.season));
    this.y.domain([0, d3Array.max(this.barData, (d) => d.viewers)]);
  }

  drawAxes() {
    this.g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x))
      .attr('font-size', '30');
    this.g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .attr('fill', 'rgb(34, 167, 240)')
      .attr('font-size', '50')
      .text('viewers');
  }

  drawChart() {
    this.g.selectAll('.bar')
      .data(this.barData)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('fill', 'rgb(34, 167, 240)')
      .attr('x', (d) => this.x(d.season))
      .attr('y', (d) => this.y(d.viewers))
      .attr('width', this.x.bandwidth())
      .attr('height', (d) => this.height - this.y(d.viewers));
  }




  async getProducts() 
  {

    let params = "";
    if(this.mes > 0 )
    {
      params = '?month=' + this.mes;
    }
    await this.api.get("products/stats"+params)
      .subscribe(res => {
        console.log(res);
        if (res.success) {
          let products = res.data.products;

          var presentations = [];
          
          for (var i = 0; i < products.length; i++) {
            for (var j = 0; j < products[i].presentations.length; j++) {
              var presentation = products[i].presentations[j];
              /*
              var element = { 
                  presentation: presentation.uuid,
                  requested_quantity: "",
                  wholesale_price: presentation.wholesale_price,
                  retail_price: presentation.retail_price,
                  label: presentation.short_name + " (" + presentation.measurement +")",
                  product: products[i].name
                 };
              */
             var element = {
               season: presentation.short_name,
               viewers: presentation.stock_quantity
             }
              presentations.push(element);
            }
          }
          this.barData = presentations;
          this.svg.remove("g");
          this.drawBarChart();
          
          console.log(this.barData);
        }
        else {
          console.log(res);
        }
        //loading.dismiss();
      }, err => {
        console.log(err);
        //loading.dismiss();
      });
  
  }
}
