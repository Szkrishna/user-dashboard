import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  LucideAngularModule, House, ChartColumnIncreasing, Layers, CopyCheck, ChartPie, Users,
  Search, Box, Settings2, CloudDownload, EllipsisVertical, Zap, TrendingUp, Cog, Settings, ArrowLeft, ArrowRight, ArrowDown, CircleQuestionMark, Trash2, Pencil
} from 'lucide-angular';
import * as Highcharts from 'highcharts';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexStroke,
  ApexPlotOptions,
  NgApexchartsModule
} from 'ng-apexcharts';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export type RadialChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  labels: string[];
};
import { ApiService } from '../services/api.service';

export interface GridColumn {
  column_key: string;
  column_name: string;
  type: string;
  align: string;
}

export interface GridData {
  id: string;
  [key: string]: any;
}

declare var bootstrap: any;

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, NgApexchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
  readonly TrendingUp = TrendingUp;
  readonly Cog = Cog;
  readonly Settings = Settings;
  readonly ArrowLeft = ArrowLeft;
  readonly ArrowRight = ArrowRight;
  readonly ArrowDown = ArrowDown;
  readonly CircleQuestionMark = CircleQuestionMark;
  readonly Trash2 = Trash2;
  readonly Pencil = Pencil;
  public radialChartOptions: Partial<RadialChartOptions> | null = null;
  public gridColumns: GridColumn[] = [];
  public gridData: GridData[] = [];
  public selectedRows: Set<string> = new Set();
  public isAllSelected = false;
  public selectedUser: any = null;
  public modalRef: any;

  constructor(private dashboardService: ApiService) { }

  ngOnInit() {
    this.plotHeightChart();
    this.plotRadialChart();
    this.loadTableData();
  }

  plotHeightChart() {
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

  plotRadialChart() {
    const actual = 240;
    const total = 300;
    const percentage = (actual / total) * 100;

    this.radialChartOptions = {
      series: [percentage],
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
            size: '68%'
          },
          dataLabels: {
            show: true,
            name: {
              show: false
            },
            value: {
              show: true,
              fontSize: '32px',
              fontWeight: 600,
              offsetY: -10,
              color: '#6343c1',
              formatter: function () {
                return `${actual}`;
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
        type: 'solid',
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Vendors Monitored']
    };
  }


  async loadTableData() {
    try {
      const response = await this.dashboardService.fetchGridData();
      this.gridColumns = response.grid_columns;
      this.gridData = response.grid_data;
    } catch (error) {
      console.error('Error loading table data:', error);
    }
  }

  toggleSelectAll() {
    if (this.isAllSelected) {
      this.gridData.forEach(row => this.selectedRows.add(row.id));
    } else {
      this.selectedRows.clear();
    }
  }

  toggleRowSelection(rowId: string) {
    if (this.selectedRows.has(rowId)) {
      this.selectedRows.delete(rowId);
    } else {
      this.selectedRows.add(rowId);
    }

    this.isAllSelected = this.selectedRows.size === this.gridData.length;
  }

  openDeleteModal(user: any): void {
    this.selectedUser = user;
    const modalEl = document.getElementById('confirmDeleteModal');
    if (modalEl) {
      this.modalRef = new bootstrap.Modal(modalEl, {
        keyboard: false,
      });
      this.modalRef.show();
    }
  }

  openEditModal(user: any): void {
    this.selectedUser = user;
    const modalEl = document.getElementById('confirmEditModal');
    if (modalEl) {
      this.modalRef = new bootstrap.Modal(modalEl, {
        keyboard: false,
      });
      this.modalRef.show();
    }
  }

  closeModal(): void {
    this.modalRef?.hide();
    document.querySelector('.modal-backdrop')?.remove();
    document.body.classList.remove('modal-open');
  }

  confirmDelete() {
    if (!this.selectedUser) return;
    const id = this.selectedUser.id;
    this.gridData = this.gridData.filter(item => item.id !== id);
    this.selectedUser = null;
    this.closeModal();
  }

  getTagClass(tag: any): string {
    const text = tag.value.toLowerCase().replace(/\s+/g, '-');
    return `tag-${text}`;
  }


  getStatusClass(status: any): string {
    const text = status.toLowerCase().replace(/\s+/g, '-');
    return `status-${text}`;
  }


  getUserInitials(): string {
    const user = this.gridData?.[0];
    const key = this.gridColumns?.[0]?.column_key;

    const fullName = user?.[key];
    const first = fullName?.first_name?.charAt(0) || '';
    const last = fullName?.last_name?.charAt(0) || '';
    return `${first}${last}`;
  }
}