// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { HomeComponent } from '../home/home.component';

import { PersoninvehicleComponent } from './personinvehicle.component';

import { MotoristComponent } from './motorist.component';
import { AccidentComponent } from './accident.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehiclelistComponent } from './vehiclelist/vehiclelist.component';
import { PedastrianComponent } from './pedastrian/pedastrian.component';
import { AccidentlistComponent } from './accidentlist/accidentlist.component';
import { AccidentdetailComponent } from './accidentdetail/accidentdetail.component';
import { MotoristdetailComponent } from './motoristdetail/motoristdetail.component';
import { AlldetailsComponent } from './alldetails/alldetails.component';

import {A11yModule} from '@angular/cdk/a11y';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { UpdateComponent } from './update/update.component';
import { EditmotoristComponent } from './editmotorist/editmotorist.component';
import { EditvehicleComponent } from './editvehicle/editvehicle.component';
import { EditpersoninvehicleComponent } from './editpersoninvehicle/editpersoninvehicle.component';
import { EditpedastrianComponent } from './editpedastrian/editpedastrian.component';
import { AuthInterceptor } from '../../auth/auth-interceptor';
import { UploadComponent } from './upload/upload.component';
import { ImageComponent } from './image/image.component';
import { SafehtmlPipe } from '../../pipe/safehtml.pipe';
import { readFileSync } from 'fs';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    A11yModule,
    
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule
   
    
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent,
    HomeComponent,
    AccidentComponent,
    PersoninvehicleComponent,
    
    MotoristComponent,
    VehicleComponent,
    VehiclelistComponent,
    PedastrianComponent,
    AccidentlistComponent,
    AccidentdetailComponent,
    MotoristdetailComponent,
    AlldetailsComponent,
    UpdateComponent,
    EditmotoristComponent,
    EditvehicleComponent,
    EditpersoninvehicleComponent,
    EditpedastrianComponent,
    UploadComponent,
    ImageComponent,
    SafehtmlPipe,
    UsersComponent
    
 

    
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
},]
})
export class ThemeModule { }
