import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  async fetchGridData(): Promise<any> {
    const url = 'https://01.fy25ey01.64mb.io/';
    return this.http.get(url).toPromise();
  }
}