import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavComponent } from "./nav/nav.component";
import { LandingComponent } from "./components/landing/landing.component";
import { HeroComponent } from "./components/landing/hero/hero.component";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { IconsComponent } from "./components/landing/hero/icons/icons.component";
import {
  MatDatepickerModule,
  matDatepickerAnimations
} from "@angular/material/datepicker";
import { ReactiveFormsModule } from "@angular/forms";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { LandingQuestionsComponent } from './components/landing-questions/landing-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    HeroComponent,
    IconsComponent,
    LandingQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatMomentDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
