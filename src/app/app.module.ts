import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// routing added
import { my_AppRoutingProviders, my_Routing } from './app.routing'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    my_Routing
  ],
  providers: [my_AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
