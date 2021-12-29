import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRegisterComponent } from './app-register/app-register.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppWelcomeToStarComponent } from './app-welcome-to-star/app-welcome-to-star.component';
import { AppProfileComponent } from './app-profile/app-profile.component';
import { AppListMoviesComponent } from './app-list-movies/app-list-movies.component';
import { AppShopingCarComponent } from './app-shoping-car/app-shoping-car.component';
import { AppMovieInfoComponent } from './app-movie-info/app-movie-info.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppAdminUserComponent } from './app-admin-user/app-admin-user.component';


const routes: Routes = [
  {path:'', component:AppHomeComponent},
  {path:'*', component:AppHomeComponent},
  {path:'home', component:AppHomeComponent},
  {path:'register', component:AppRegisterComponent},
  {path:'login', component:AppLoginComponent},
  {path:'welcometostar', component:AppWelcomeToStarComponent},
  {path:'welcometostar/:id', component:AppWelcomeToStarComponent},
  {path:'profile/:id', component:AppProfileComponent},
  {path:'profile/:id/listMovies', component:AppListMoviesComponent},
  {path:'profile/:id/shopingCar', component:AppShopingCarComponent},
  {path:'profile/:id/movieInfo/:name', component:AppMovieInfoComponent},
  {path:'profile/:id/shopingCar/:element', component:AppShopingCarComponent},
  {path:'profile/:id/listUser', component:AppAdminUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
