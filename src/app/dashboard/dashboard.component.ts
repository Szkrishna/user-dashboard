import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Highcharts from 'highcharts';
import {
  LucideAngularModule, House, ChartColumnIncreasing, Layers, CopyCheck, ChartPie, Users,
  Search, Box, Settings2, CloudDownload, EllipsisVertical, Zap
} from 'lucide-angular';

@Component({
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  readonly House = House;
  readonly ChartColumnIncreasing = ChartColumnIncreasing;
  readonly Layers = Layers;
  readonly CopyCheck = CopyCheck;
  readonly ChartPie = ChartPie;
  readonly Users = Users;
  readonly Search = Search;
  readonly Box = Box;
  readonly Settings2 = Settings2;
  readonly CloudDownload = CloudDownload;
  readonly EllipsisVertical = EllipsisVertical;
  readonly Zap = Zap;

  public isChartActive: boolean = true;

  ngOnInit() {
    this.callHeightChart();
    this.callRadialChart();
  }

  callHeightChart() {
    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Major trophies for some English teams',
        align: 'left'
      },
      xAxis: {
        categories: ['Arsenal', 'Chelsea', 'Liverpool', 'Manchester United']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Count trophies'
        },
        stackLabels: {
          enabled: true
        }
      },
      legend: {
        align: 'left',
        x: 70,
        verticalAlign: 'top',
        y: 70,
        floating: true,
        backgroundColor: '#ffffff',
        borderColor: '#cccccc',
        borderWidth: 1,
        shadow: false
      },
      tooltip: {
        headerFormat: '<b>{point.category}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [
        { name: 'BPL', data: [3, 5, 1, 13], type: 'column' },
        { name: 'FA Cup', data: [14, 8, 8, 12], type: 'column' },
        { name: 'CL', data: [0, 2, 6, 3], type: 'column' }
      ]
    };

    Highcharts.chart('container', chartOptions);
  }

  callRadialChart() {
    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'solidgauge',
        height: '110%',
      },

      title: {
        text: 'Completion',
        style: {
          fontSize: '20px'
        }
      },

      tooltip: {
        enabled: false
      },

      pane: {
        startAngle: -90,
        endAngle: 90,
        background: [{
          outerRadius: '100%',
          innerRadius: '60%',
          shape: 'arc',
          borderWidth: 0,
          backgroundColor: '#f0f0f0'
        }]
      },

      yAxis: {
        min: 0,
        max: 100,
        stops: [
          [0.1, '#f44336'], // red
          [0.5, '#ffeb3b'], // yellow
          [0.9, '#4caf50']  // green
        ],
        lineWidth: 0,
        tickPositions: []
      },

      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: -20,
            borderWidth: 0,
            useHTML: true,
            format: '<div style="text-align:center"><span style="font-size:24px">{y}%</span></div>'
          }
        }
      },

      credits: {
        enabled: false
      },

      // series: [{
      //   name: 'Completion',
      //   data: [75], // Change this value dynamically
      //   dataLabels: {
      //     format: '<div style="text-align:center"><span style="font-size:24px">{y}%</span></div>'
      //   }
      // }]
    };
  }


}