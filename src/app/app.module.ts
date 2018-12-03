import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { AllergiesMainComponent } from './allergies/allergies-main/allergies-main.component';
import { AllergiesService } from './allergies/allergies-service/allergies.service';
import { LeftMenuComponent } from './shared/left-menu/left-menu.component';
import { RightMenuComponent } from './shared/right-menu/right-menu.component';
import { AllergiesListComponent } from './allergies/allergies-list/allergies-list.component';
import { AllergyAddComponent } from './allergies/allergy-add/allergy-add.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'allergies', pathMatch: 'full' },
  { path: 'allergies', component: AllergiesMainComponent},
  { path: 'add-allergy', component: AllergyAddComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    AllergiesMainComponent,
    LeftMenuComponent,
    RightMenuComponent,
    AllergiesListComponent,
    AllergyAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AllergiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
