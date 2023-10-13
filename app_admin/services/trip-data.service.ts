import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Trip } from '../models/trip';


@Injectable()
export class TripDataService {
  constructor(
    private http: Http,
   // @Inject(BROWSER_STORAGE) private storage: Storage from github
  ) {}

  private apiBaseUrl = "http://localhost:3000/api/";
  private tripUrl = `${this.apiBaseUrl}trips/`;

  public getTrips(): Promise<Trip[]> {
    console.log("Inside TripDataService#getTrips");
    return this.http
      .get(`${this.apiBaseUrl}trips`)
      .toPromise()
      .then((response) => response.json() as Trip[])
      .catch(this.handleError);
  }

  // added getTrip 10/12
  public getTrip(tripCode: string): Promise<Trip> {
    console.log("Inside TripDataService#getdTrip");
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then((response) => response.json() as Trip)
      .catch(this.handleError);
  }

  private handleError(error:any): Promise<any> {
    console.error('Something has gone wrong', error); //for demo purposes only
    return Promise.reject(error.message || error);
  }
}
