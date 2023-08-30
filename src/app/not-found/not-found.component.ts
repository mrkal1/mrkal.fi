import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgParticlesModule } from 'ng-particles';
import { particlesOptions } from '../tsparticlesconfig';
import { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule,NgParticlesModule],
  template: `
    <ng-particles id="particles-js" [options]="particlesoptions" [particlesInit]="particlesInit"></ng-particles>
    <section class="hero is-fullheight" id="particles-js">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1 has-text-light">404</h1>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  particlesoptions = particlesOptions;
  async particlesInit(engine: Engine): Promise<void> {
    
    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}
