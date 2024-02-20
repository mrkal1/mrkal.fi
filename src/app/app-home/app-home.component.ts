import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgParticlesModule } from 'ng-particles';
import { AppbackgroundComponent } from '../appbackground/appbackground.component';

@Component({
  selector: 'app-app-home',
  standalone: true,
  imports: [CommonModule, NgParticlesModule, AppbackgroundComponent],
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss'],
})
export class AppHomeComponent {}
