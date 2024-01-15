import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { appRoutingModule } from "./appRoutingModule";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { LandingComponent } from "./landing/landing.component";
import { MatButtonModule} from "@angular/material/button";



NgModule({
    declarations : [
    SignInComponent,
    SignUpComponent,
    LandingComponent
],
imports : [
    BrowserModule,
    appRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
],
providers : [],
bootstrap : [AppComponent]
})


