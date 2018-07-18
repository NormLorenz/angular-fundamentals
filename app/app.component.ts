import { Component } from '@angular/core';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})

export class AppComponent {
  title: string;

  constructor() {
    this.title = 'My First Angular App';
  }

  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    }, {
      link: '/oops',
      name: '404',
      exact: false
    },
  ];
}
