import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgParticlesModule } from 'ng-particles';
import { particlesOptions } from '../tsparticlesconfig';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

@Component({
  selector: 'app-appbackground',
  standalone: true,
  imports: [CommonModule, NgParticlesModule],
  templateUrl: './appbackground.component.html',
})
export class AppbackgroundComponent {
  particlesoptions = particlesOptions;

  async particlesInit(engine: Engine): Promise<void> {
    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}
