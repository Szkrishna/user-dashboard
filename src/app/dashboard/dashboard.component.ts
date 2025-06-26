import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule, House, ChartColumnIncreasing, Layers, CopyCheck, ChartPie, Users,
  Search, Box, Settings2, CloudDownload, EllipsisVertical, Zap
} from 'lucide-angular'
import * as Highcharts from 'highcharts';
import { ApexChart, ApexFill, ApexStroke, ApexNonAxisChartSeries, NgApexchartsModule } from 'ng-apexcharts';

export type RadialChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  stroke: ApexStroke;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  standalone: true,
  imports: [CommonModule, LucideAngularModule, NgApexchartsModule],
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
  public radialChartOptions!: RadialChartOptions;


  ngOnInit() {
    this.plotHeightChart();
    this.plotRadialChart();
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
        lineColor: '#ececec',
        title: {
          text: 'Months',
          margin: 16,
          style: {
            fontSize: '14px',
          }
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        min: 0,
        tickInterval: 20,
        title: {
          text: 'Security Rating',
          margin: 32,
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
          pointWidth: 32,
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

    Highcharts.chart('column-container', chartOptions);
  }


  private plotRadialChart() {
    this.radialChartOptions = {
      series: [240],
      chart: {
        type: 'radialBar',
        height: 300,
        id: 'radialChart'
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            margin: 0,
            size: '70%'
          },
          dataLabels: {
            show: true,
            name: {
              show: false
            },
            value: {
              show: true,
              fontSize: '24px',
              fontWeight: 600,
              offsetY: 5,
              color: '#6343c1',
              formatter: function (val: number) {
                return `${val}`;
              }
            }
          },
          track: {
            margin: 0,
            background: '#f0f0f0',
            strokeWidth: '100%',
          }
        }
      },
      fill: {
        colors: ['#6343c1'],
        type: 'solid'
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Vendors monitored']
    };
  }


}
