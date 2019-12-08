import { Component } from '@angular/core';
import { ApiCallService } from './api-call.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APIrouting';

  constructor(private svc: ApiCallService, private http: HttpClient){
    this.svc.printToConsole("Got The Response")
  }

  ngOnInit(){
    let obs = this.http.get('https://swapi.co/api/');
    obs.subscribe(() => console.log('Response from api'));
  }
}
