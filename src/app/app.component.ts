import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <section>
    <router-outlet></router-outlet>
  </section>
  `,
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent { }
