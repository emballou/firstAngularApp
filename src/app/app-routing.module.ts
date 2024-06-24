import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { WhatsNowComponent } from './pages/whats-now/whats-now.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { ProfileComponent } from './pages/profile/src/lib/components/profile.component';
import { ColophonComponent } from './pages/colophon/colophon.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'now',
    component: WhatsNowComponent
  },
  {
    path: 'colophon',
    component: ColophonComponent
  },
  {
    path: 'playground',
    component: PlaygroundComponent
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  }
];

/**
 * App Routing Module
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
