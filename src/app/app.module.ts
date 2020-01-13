import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { MenuComponent } from './home/menu/menu.component';
import { HomehomeComponent } from './home/homehome/homehome.component';
import { ClassComponent } from './home/class/class.component';
import { CtaComponent } from './home/cta/cta.component';
import { BanefitComponent } from './home/banefit/banefit.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { NewsComponent } from './home/news/news.component';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    HomehomeComponent,
    ClassComponent,
    CtaComponent,
    BanefitComponent,
    TestimonialComponent,
    NewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
