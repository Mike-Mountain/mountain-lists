import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { environment } from '../../environments/environment';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { LandingComponent } from './components/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
  ],
  exports: [
    // Modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AkitaNgDevtools,
    AkitaNgRouterStoreModule,
    // Components
    LandingComponent,
  ],
})
export class CoreModule {}
