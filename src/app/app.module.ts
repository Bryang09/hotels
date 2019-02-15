// MODULES
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {
  MatDatepickerModule,
  matDatepickerAnimations
} from "@angular/material/datepicker";

import { ReactiveFormsModule } from "@angular/forms";
import { MatMomentDateModule } from "@angular/material-moment-adapter";

// COMPONENTS
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { LandingComponent } from "./components/landing/landing.component";
import { HeroComponent } from "./components/landing/hero/hero.component";
import { IconsComponent } from "./components/landing/hero/icons/icons.component";
import { MatStepperModule } from "@angular/material/stepper";
import { MatSelectModule, MatButtonModule } from "@angular/material";
import { Section1Component } from "./components/landing/section1/section1.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    HeroComponent,
    IconsComponent,
    Section1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    MatStepperModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
