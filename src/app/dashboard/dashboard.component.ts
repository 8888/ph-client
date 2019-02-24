import { Component } from '@angular/core';

import { PropertyService } from '../property/property.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public properties: Property[];

  constructor(private propertyService: PropertyService) {
    this.propertyService.fetch()
      .subscribe(properties => this.properties = properties);
  }
}
