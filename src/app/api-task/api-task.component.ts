import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-api-task',
  templateUrl: './api-task.component.html',
  styleUrls: ['./api-task.component.css'],
})
export class ApiTaskComponent implements OnInit {
  li: any;
  lis = [];
  dataSource: any;
  stringifiedData: any;
  parsedJson: any;
  status: any;
  load_status: any;
  volt_status: any;
  mcb_status: any;
  pf_status: any;
  lat1: any;
  lng1: any;
  lat = 19.089664;
  long = 72.886375;
  zoom = 7;

  getId(mac_id: any) {
    for (let item of this.dataSource) {
      if (item.mac_id == mac_id) {
        this.status = item;
      }
    }
    this.volt_status = this.status.r_volt_status;
    this.load_status = this.status.r_load_status;
    this.mcb_status = this.status.r_mcb_status;
    this.pf_status = this.status.r_pf_status;
    this.lat1 = this.status.Lat;
    this.lng1 = this.status.Lng;
  }

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private http: HttpClient, private observer: BreakpointObserver) {}

  ngOnInit(): void {
    this.http
      .get('http://uat.lightingmanager.in/panel/gettestlist?org_id=3')
      .subscribe((Response) => {
        this.li = Response;
        this.lis = this.li.result;
        this.stringifiedData = JSON.stringify(this.lis);
        this.parsedJson = JSON.parse(this.stringifiedData);
        this.dataSource = this.parsedJson;
      });
  }
}
