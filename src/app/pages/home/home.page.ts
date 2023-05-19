import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  navigateTo(btnName: string) {
    switch (btnName) {
      case 'menu':
        this.router.navigate(['/']);
        break;
      case 'dish':
        console.log('navigate')
        this.router.navigate(['/new']);
        break;
      case 'option':
        this.router.navigate(['/']);
        break;
    }
  }

}
