import { Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { KuopioComponent } from './kuopio/kuopio.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routeConfig: Routes = [
    {
      path: '',
      component: AppHomeComponent,
      title: 'Mr. Kal'
    },
    {
      path: 'kuopio',
      component: KuopioComponent,
      title: 'Kuopio'
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: "Not Found"
    }
  ];
  
  export default routeConfig;