import { Component, OnInit, OnDestroy } from '@angular/core';
import {MeteorObservable} from 'meteor-rxjs';
import {Observable} from 'rxjs/Observable';
import {Players} from '../../../../imports/collections/players';
import {Player} from '../../../../imports/models/player';

@Component({
  selector: 'players',
  templateUrl: 'players.html',
  styleUrls: ['players.scss']
})
export class PlayersComponent implements OnInit, OnDestroy {
    name: string;
    players: Observable<Player[]>;
    playersListSubscription: Subscription;
    ngOnInit() {
        this.playersListSubscription = MeteorObservable.subscribe('playersList').subscribe(() => {
            this.players = Players.find();
        });
    }
    ngOnDestroy() {
        if (this.playersListSubscription) {
            this.playersListSubscription.unsubscribe();
        }
    }
    addPlayer() {
        if (this.name && this.name !== '') {
            Meteor.call('addPlayer', this.name);
            this.name = null;
        }
    }
    removePlayer(_id: string) {
        Meteor.call('removePlayer', _id);
    }
    restorePlayer(_id: string) {
        Meteor.call('restorePlayer', _id);
    }
}
