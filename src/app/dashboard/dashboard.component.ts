import { Component } from '@angular/core';
import { PropertyService } from '../property/property.service';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public properties: Property[];

  constructor(private propertyService: PropertyService) {
    this.propertyService.fetch()
      .subscribe(properties => this.properties = properties);
  }

  public mostRecentPrice(property: Property): number {
    const length = property.listing.priceHistory.length;
    if (length < 0) return 0;
    return property.listing.priceHistory[length - 1].price;
  }
}
