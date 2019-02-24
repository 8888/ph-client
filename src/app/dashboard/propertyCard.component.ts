import { Component, Input, OnChanges } from '@angular/core';

import { PropertyService } from '../property/property.service';
import { PropertyStateService } from '../property/propertyState.service';

@Component({
  selector: 'app-property-card',
  templateUrl: './propertyCard.component.html',
  styleUrls: ['./propertyCard.component.css']
})
export class PropertyCardComponent implements OnChanges {
  @Input() property: Property;
  public availableActions: {name: string, id: number}[];

  constructor(
    private propertyService: PropertyService,
    private propertyStateService: PropertyStateService
  ) {}

  ngOnChanges() {
    this.availableActions = this.getAvailableActions(this.property.state);
  }

  public mostRecentPrice(property: Property): number {
    // TODO: revisit when using live data
    // probably just let the server decide the most recent
    const length = property.listing.priceHistory.length;
    if (length < 0) return 0;
    return property.listing.priceHistory[length - 1].price;
  }

  public getStateName(state: number): string {
    return this.propertyStateService.getStateName(state);
  }

  public onClickAction(state: number): void {
    this.propertyService.changeState(this.property.id, state);
  }

  private getAvailableActions(state: number): {name: string, id: number}[] {
    const actionIds = this.propertyStateService.getAvailableActions(state);
    return actionIds.map(id => {
      return {
        id,
        name: this.propertyStateService.getStateName(id)
      };
    });
  }
}
