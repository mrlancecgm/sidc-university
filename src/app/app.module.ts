import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr'; // For auth after login toast

import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';

import { coreConfig } from 'app/app-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { MainModule } from './main/main.module';
import { BlockUIModule } from 'ng-block-ui';
import { JwtModule } from '@auth0/angular-jwt';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiInterceptor } from './common/interceptor/api-interceptor';
import { environment } from 'environments/environment';
import { APIService } from './psgc-api';
import { DatePipe } from '@angular/common';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth/welcome',
    pathMatch: 'full',
  }
];


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled', // Add options right here
      relativeLinkResolution: 'legacy'
    }),
    TranslateModule.forRoot(),

    //NgBootstrap
    NgbModule,
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot(),
    BlockUIModule.forRoot({
      message: 'Loading...'
    }),

    JwtModule.forRoot({
      config: {
        allowedDomains: ["localhost:4201"],
      },
    }),

    // Core modules
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,
    ReactiveFormsModule,
    // App modules
    LayoutModule,
    MainModule
  ],
  providers: [DatePipe, APIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
