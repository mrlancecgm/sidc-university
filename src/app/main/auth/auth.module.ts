import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BASE_PATH as IDENTITY_BASE_PATH,IdentityService} from "app/identity-api";
import { DatePipe } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { NgSelectModule } from '@ng-select/ng-select';
// import { BASE_PATH } from 'app/report-api'
import { environment } from 'environments/environment';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: '',
    redirectTo: '/auth/welcome',
    pathMatch: 'full',
  },
];


@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CoreCommonModule,
    NgxMaskModule.forRoot(),
    Ng2FlatpickrModule,
    NgSelectModule
  ]
})
export class AuthModule { }
