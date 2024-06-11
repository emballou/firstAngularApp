import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { WhatsNowComponent } from './pages/whats-now/whats-now.component';

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
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'now',
    component: WhatsNowComponent
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
