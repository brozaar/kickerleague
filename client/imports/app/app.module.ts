import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MenuComponent} from './menu/menu.component';
import {PlayersComponent} from './players/players.component';
import {OverviewComponent} from './overview/overview.component';
import {SeasonsComponent} from './seasons/seasons.component';
import {GamesComponent} from './games/games.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'overview',
                component: OverviewComponent
            },
            {
                path: 'players',
                component: PlayersComponent
            },
            {
                path: 'seasons',
                component: SeasonsComponent
            },
            // Home Page
            {
                path: '',
                redirectTo: '/overview',
                pathMatch: 'full'
            },
            // 404 Page
            {
                path: '**',
                component: PageNotFoundComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        MenuComponent,
        PlayersComponent,
        OverviewComponent,
        SeasonsComponent,
        GamesComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
