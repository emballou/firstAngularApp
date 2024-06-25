import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { WhatsNowComponent } from './pages/whats-now/whats-now.component';
import { NavigationBarComponent } from './navigation-bar/src/lib/components/navigation-bar/navigation-bar.component';
import { NavigationService } from './navigation-bar/src/lib/services/navigation.service';
import { NavigationBarItemComponent } from './navigation-bar/src/lib/components/navigation-bar-item/navigation-bar-item.component';
import { InformationButtonComponent } from './information-button/src/lib/components/information-button/information-button.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { ProfileComponent } from './pages/profile/src/lib/components/profile.component';
import { ProjectCarouselComponent } from './project-carousel/src/lib/components/project-carousel/project-carousel.component';
import { ProjectCarouselItemComponent } from './project-carousel/src/lib/components/project-carousel-item/project-carousel-item.component';
import { ProjectsService } from './project-carousel/src/lib/services/projects.service';
import { ProjectCarouselItemDetailComponent } from './project-carousel/src/lib/components/project-carousel-item-detail/project-carousel-item-detail.component';
import { ProjectSkillsBlockComponent } from './project-carousel/src/lib/components/project-skills-block/project-skills-block.component';
import { ColophonComponent } from './pages/colophon/colophon.component';
import { FormsModule } from '@angular/forms';
import { StatusUpdatesComponent } from './status-updates/src/lib/components/status-updates.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports: [],
  declarations: [
    AppComponent ,
    ProfileComponent,
    ProjectsComponent,
    WhatsNowComponent,
    PlaygroundComponent,
    ColophonComponent,
    NavigationBarComponent,
    NavigationBarItemComponent,
    InformationButtonComponent,
    ProjectCarouselComponent,
    ProjectCarouselItemComponent,
    ProjectCarouselItemDetailComponent,
    ProjectSkillsBlockComponent,
    StatusUpdatesComponent
  ],
  providers: [
    NavigationService,
    ProjectsService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
