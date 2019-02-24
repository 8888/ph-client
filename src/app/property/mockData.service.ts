import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  public properties$: Observable<Property[]>;
  private properties: {[id: string]: Property} = {};
  private propertiesSubject: BehaviorSubject<Property[]>;

  constructor(private http: HttpClient) {
    this.propertiesSubject = new BehaviorSubject<Property[]>([]);
    this.properties$ = this.propertiesSubject.asObservable();
    this.http.get<{[id: string]: Property}>('./assets/sampleData/properties.json')
      .subscribe(properties => {
        this.properties = properties;
        this.pushPropertiesToStream();
      });
  }

  public changeState(propertyId: string, stateId: number): void {
    this.properties[propertyId].state = stateId;
    this.pushPropertiesToStream();
  }

  private pushPropertiesToStream(): void {
    this.properties = JSON.parse(JSON.stringify(this.properties));
    // fully copying to create new objects every time
    // this allows angular's change detection to be triggered on nested changes
    // This let me skip a proper change detection and local cache strategy
    // the real approach will be determined on other factors
    // and should not be implemented for mock data
    const propertiesArray = Object.values(this.properties);
    this.propertiesSubject.next(propertiesArray);
  }
}
