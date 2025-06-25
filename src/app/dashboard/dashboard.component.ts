import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, 
  House, 
  ChartColumnIncreasing, 
  Layers, 
  CopyCheck, 
  ChartPie, 
  Users, 
  Search,
  Box, 
  Settings2, 
  CloudDownload,
  EllipsisVertical
} from 'lucide-angular';


@Component({
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
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
  public isChartActive: boolean = true;
}