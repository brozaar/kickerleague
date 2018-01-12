import { Component, OnInit, OnDestroy } from '@angular/core';
import {MeteorObservable} from 'meteor-rxjs';
import {Observable} from 'rxjs/Observable';
import {Game} from '../../../../imports/models/games';
import {Games} from '../../../../imports/collections/games';

@Component({
  selector: 'games',
  templateUrl: 'games.html',
  styleUrls: ['games.scss']
})
export class GamesComponent implements OnInit, OnDestroy {
    name: string;
    games: Observable<Game[]>;
    gamesListSubscription: Subscription;

    ngOnInit() {
        this.gamesListSubscription = MeteorObservable.subscribe('gamesList').subscribe(() => {
            this.games = Games.find();
        });
    }
    ngOnDestroy() {
        if (this.gamesListSubscription) {
            this.gamesListSubscription.unsubscribe();
        }
    }
    // addPlayer() {
    //     if (this.name && this.name !== '') {
    //         Meteor.call('addPlayer', this.name);
    //         this.name = null;
    //     }
    // }
    // removePlayer(_id: string) {
    //     Meteor.call('removePlayer', _id);
    // }
    // restorePlayer(_id: string) {
    //     Meteor.call('restorePlayer', _id);
    // }
}
