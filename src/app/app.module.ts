import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import {
    MatListModule,
    MatSidenavModule, MatToolbarModule,
} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";

import {CoursesModule} from "./courses/courses.module";
import {RouterModule, Routes} from "@angular/router";
import {AuthModule} from "./auth/auth.module";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {RouterStateSerializer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {CustomRouterStateSerializer} from "./shared/utils";


const routes: Routes = [
    {
        path: "**",
        redirectTo: '/'
    }
];


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        CoursesModule.forRoot(),
        AuthModule.forRoot(),
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router'
        })
    ],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
