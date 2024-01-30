import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './share/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatRippleModule} from "@angular/material/core";
import { DiamodComponent } from './share/components/diamod/diamod.component';
import { CarouselComponent } from './share/components/carousel/carousel.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import { CarouselAboutComponent } from './share/components/carousel-about/carousel-about.component';
import { InfoComponent } from './share/components/info/info.component';
import { DetailsBoxComponent } from './share/components/details-box/details-box.component';
import { MosaicComponent } from './share/components/mosaic/mosaic.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserFeedbackComponent } from './share/components/user-feedback/user-feedback.component';
import { FooterComponent } from './share/components/footer/footer.component';
import { BurgerComponent } from './share/components/burger/burger.component';
import { DropdownComponent } from './share/components/dropdown/dropdown.component';
import {MatMenuModule} from "@angular/material/menu";
import { RegisterComponent } from './share/components/register/register.component';
import { LoginComponent } from './share/components/login/login.component';
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    DiamodComponent,
    CarouselComponent,
    CarouselAboutComponent,
    InfoComponent,
    DetailsBoxComponent,
    MosaicComponent,
    UserFeedbackComponent,
    FooterComponent,
    BurgerComponent,
    DropdownComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    CarouselModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
