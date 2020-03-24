import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from '.c:/Users/Student/Desktop/Andr/angular/1 урок/my-app/src/my-header/my-header.component';
import { MyHeaderComponent } from './my-header/my-header.component';

@NgModule({
   declarations: [
      AppComponent,
      MyHeaderComponent,
      MyHeaderComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
