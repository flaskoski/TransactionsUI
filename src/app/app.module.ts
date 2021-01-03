import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AssetsModule } from './assets/assets.module';
import { AssetListComponent } from './assets/asset-list/asset-list.component';



const routes: Routes = [
  {path:'assets', component: AssetListComponent},
  {path:'**', component: AssetListComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AssetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
