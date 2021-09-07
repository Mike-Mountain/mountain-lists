import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
