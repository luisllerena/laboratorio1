import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatCardModule,MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialNavComponent } from './my-material-nav/my-material-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponentComponent } from './second-component/second-component.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { DoggyComponent } from './doggy/doggy.component';

const appRoutes: Routes = [
  {path: 'first-component', component: FirstComponentComponent },
  {path: 'second-component', component: SecondComponentComponent },
  {path: 'doggy-page', component: DoggyComponent }
  /*{path: 'luis-llerena', component: LuisNewComponent }*/
];

@NgModule({
  declarations: [
    AppComponent,
    MyMaterialNavComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    DoggyComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
