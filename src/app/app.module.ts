
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

import { BioComponent } from './about_children/bio/bio.component';
import { EducationComponent } from './about_children/education/education.component';

import { ExperienceComponent } from './about_children/experience/experience.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { AboutContactComponent } from './about-contact/about-contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    ProjectsComponent,
    AboutComponent,
    BioComponent,
    EducationComponent,
    ExperienceComponent,
    SidenavComponent,
    GetInTouchComponent,
    AboutContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
