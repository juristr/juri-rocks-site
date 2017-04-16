import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-actors',
  template: `
  <ul>
    <li *ngFor="let contact of contacts$ | async">
          {{ contact.name }}
    </li>
  </ul>
  `
})
export class ActorsComponent implements OnInit {
  contacts$;

  constructor(private http: Http) {  }

  ngOnInit() {
    this.contacts$ = this.http
      .get('https://starwars-json-server-ewtdxbyfdz.now.sh/people')
      .map(res => res.json());
  }

}
