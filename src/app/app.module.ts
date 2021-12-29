import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRegisterComponent } from './app-register/app-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppDialogConfirmationComponent } from './app-dialog-confirmation/app-dialog-confirmation.component';


import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppDialogFailComponent } from './app-dialog-fail/app-dialog-fail.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppWelcomeToStarComponent } from './app-welcome-to-star/app-welcome-to-star.component';
import { AppProfileComponent } from './app-profile/app-profile.component';
import { AppListMoviesComponent } from './app-list-movies/app-list-movies.component';
import { AppHeaderLoginComponent } from './app-header-login/app-header-login.component';
import { AppShopingCarComponent } from './app-shoping-car/app-shoping-car.component';
import { AppMovieInfoComponent } from './app-movie-info/app-movie-info.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppAdminUserComponent } from './app-admin-user/app-admin-user.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRegisterComponent,
    AppHeaderComponent,
    AppDialogConfirmationComponent,
    AppDialogFailComponent,
    AppLoginComponent,
    AppWelcomeToStarComponent,
    AppProfileComponent,
    AppListMoviesComponent,
    AppHeaderLoginComponent,
    AppShopingCarComponent,
    AppMovieInfoComponent,
    AppHomeComponent,
    AppAdminUserComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export interface countList {
  count: number;
}