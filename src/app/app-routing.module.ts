import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { WhatsNowComponent } from './pages/whats-now/whats-now.component';
import { DashboardComponent } from './pages/dashboard/src/lib/components/dashboard.component';
import { PlaygroundComponent } from './pages/playground/playground.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
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
    path: 'playground',
    component: PlaygroundComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
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
