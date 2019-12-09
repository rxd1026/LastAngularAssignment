import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  
  printToConsole(arg: any){
  console.log(arg);
  }

// subject 
  protected _eventsSubject = new Subject<Event>();

  constructor(private http: HttpClient) { }

  /*broadcast(key: any, value: any) {
    this._eventsSubject.next (key , value);
  }

  on<T>(key: any): Observable<T> {
    return this._eventsSubject.asObservable()
      .pipe(
        filter(e => e.key === key),
        map(e => e.value)
      );
  }
  */

  getPeoples() {
    return this.http.get('https://swapi.co/api/people/  ');
  }
  getPeople(id) {
    return this.http.get(`https://swapi.co/api/people/${id}  `);
  }

  getPlanets() {
    return this.http.get('https://swapi.co/api/planets/  ');
  }
  getPlanet(id) {
    return this.http.get(`https://swapi.co/api/planets/${id}  `);
  }

  getStarships() {
    return this.http.get('https://swapi.co/api/starships/  ');
  }
  getStarship(id) {
    return this.http.get(`https://swapi.co/api/starships/${id}  `);
  
}
}