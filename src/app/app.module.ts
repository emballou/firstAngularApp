import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { WhatsNowComponent } from './pages/whats-now/whats-now.component';
import { NavigationBarComponent } from './navigation-bar/components/navigation-bar.component';
import { NavigationService } from './navigation-bar/services/navigation.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [],
  declarations: [
    AppComponent ,
    DashboardComponent,
    ProjectsComponent,
    AboutComponent,
    WhatsNowComponent,
    NavigationBarComponent
  ],
  providers: [
    NavigationService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
