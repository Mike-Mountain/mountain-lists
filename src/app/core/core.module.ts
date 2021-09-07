import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { environment } from '../../environments/environment';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { LandingComponent } from './components/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './components/layout/layout.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [LandingComponent, LayoutComponent, NavigationComponent],
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
    LayoutComponent,
  ],
})
export class CoreModule {}
