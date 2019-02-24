import { Component } from '@angular/core';

import { PropertyService } from '../property/property.service';
import { PropertyStateService } from '../property/propertyState.service';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public properties: Property[];

  constructor(
    private propertyService: PropertyService,
    private propertyStateService: PropertyStateService
  ) {
    this.propertyService.fetch()
      .subscribe(properties => this.properties = properties);
  }

  public mostRecentPrice(property: Property): number {
    const length = property.listing.priceHistory.length;
    if (length < 0) return 0;
    return property.listing.priceHistory[length - 1].price;
  }

  public getStateName(state: number): string {
    return this.propertyStateService.getStateName(state);
  }
}
