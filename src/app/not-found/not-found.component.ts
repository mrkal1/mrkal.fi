import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgParticlesModule } from 'ng-particles';
import { AppbackgroundComponent } from '../appbackground/appbackground.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  template: `
    <app-appbackground />
    <section class="hero is-fullheight" id="particles-js">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1 has-text-light">404</h1>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./not-found.component.scss'],
  imports: [CommonModule, NgParticlesModule, AppbackgroundComponent],
})
export class NotFoundComponent {}
