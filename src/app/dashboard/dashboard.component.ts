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
    this.plotHeightChart();
    this.callRadialChart();
  }

  private plotHeightChart() {
    const chartOptions: Highcharts.Options = {
      colors: ['#ebecf0', '#9979e5', '#6343c1'],
      chart: {
        type: 'column'
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      xAxis: {
        title: {
          text: 'Months',
          style: {
            fontSize: '14px'
          }
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Security Rating',
          style: {
            fontSize: '14px'
          }
        },
        stackLabels: {
          enabled: false
        }
      },
      plotOptions: {
        column: {
          borderRadius: 8,
          stacking: 'normal',
          dataLabels: {
            enabled: false
          }
        }
      },
      series: [
        {
          name: 'Low',
          data: [15, 20, 10, 25, 20, 15, 8, 30, 12, 18, 22, 10],
          type: 'column'
        },
        {
          name: 'Medium',
          data: [20, 25, 30, 35, 28, 22, 25, 30, 26, 24, 30, 25],
          type: 'column'
        },
        {
          name: 'High',
          data: [18, 30, 25, 20, 22, 20, 15, 25, 20, 25, 30, 20],
          type: 'column'
        }
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