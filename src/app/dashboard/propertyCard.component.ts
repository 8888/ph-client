import { Component, Input } from '@angular/core';

import { PropertyStateService } from '../property/propertyState.service';

@Component({
  selector: 'app-property-card',
  templateUrl: './propertyCard.component.html',
  styleUrls: ['./propertyCard.component.css']
})
export class PropertyCardComponent {
  @Input() property: Property;

  constructor(private propertyStateService: PropertyStateService) {}

  public mostRecentPrice(property: Property): number {
    const length = property.listing.priceHistory.length;
    if (length < 0) return 0;
    return property.listing.priceHistory[length - 1].price;
  }

  public getStateName(state: number): string {
    return this.propertyStateService.getStateName(state);
  }
}
