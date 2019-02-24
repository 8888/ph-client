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

  private pushPropertiesToStream(): void {
    const propertiesArray = Object.values(this.properties);
    this.propertiesSubject.next(propertiesArray);
  }
}
