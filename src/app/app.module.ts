import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Ng2Webstorage } from 'ngx-webstorage';
import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';


import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent,

];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
  
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { AdminModule } from './views/admin/admin.module';
import { AttachmentComponent } from './attachment/attachment.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PmComponent } from './views/pm/pm.component';
import { AuthInterceptor} from './auth/auth-interceptor';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { SharingModule } from './shareModule';




@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    AdminModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2Webstorage
 

    
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    AttachmentComponent,
    PmComponent,
   

    
    
  
  ],
 
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
},{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },AuthService,AuthGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
