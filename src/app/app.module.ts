import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataService } from "./data.service";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

//새로 추가한 부분
import { RouterModule } from "@angular/router";
import { AppRoutes } from "./app.routing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { APP_BASE_HREF } from "@angular/common";
import { CommonModule } from "@angular/common";

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
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
  MatStepperModule,
} from "@angular/material";
import { MatDatepickerModule } from "@angular/material/datepicker";

import { SidebarModule } from "./sidebar/sidebar.module";
import { FooterModule } from "./shared/footer/footer.module";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { FixedpluginModule } from "./shared/fixedplugin/fixedplugin.module";
import { AdminLayoutComponent } from "./layouts/admin/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth/auth-layout.component";
import { DonationManagementComponent } from "./donation-management/donation-management.component";
import { HttpClientModule } from "@angular/common/http";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
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
  ],
  declarations: [DonationManagementComponent],
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    AdminLayoutComponent,
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    MaterialModule,
    MatNativeDateModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedpluginModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,

    HttpClientModule,
    SlimLoadingBarModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
