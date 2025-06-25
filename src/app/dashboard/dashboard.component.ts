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
  Settings2, 
  CloudDownload
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
  readonly Settings2 = Settings2;
  readonly CloudDownload = CloudDownload;
  public isChartActive: boolean = true;
}