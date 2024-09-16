import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { BioComponent } from './about_children/bio/bio.component';
import { EducationComponent } from './about_children/education/education.component';
import { ContactComponent } from './about_children/contact/contact.component';
import { ExperienceComponent } from './about_children/experience/experience.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutComponent, children:[
    {path: '', redirectTo:'bio', pathMatch:'full'},
    {path: 'bio', component: BioComponent},
    {path: 'education', component: EducationComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'contact', component: ContactComponent},
  ]},
  { path: 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
