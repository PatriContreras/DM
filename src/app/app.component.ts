import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showElement: boolean = true;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {
    this._router.events.subscribe(event => {

      if(event instanceof NavigationEnd && event.url === '/') {
        this.showElement = false
      }
    })
  }
}
