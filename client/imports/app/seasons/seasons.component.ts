import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Player} from '../../../../imports/models/player';
import {MeteorObservable} from 'meteor-rxjs';
import {Players} from '../../../../imports/collections/players';
import {Season, SeasonType} from '../../../../imports/models/season';
import {Seasons} from '../../../../imports/collections/season';

@Component({
    selector: 'seasons',
    templateUrl: 'seasons.html',
    styleUrls: ['seasons.scss']
})
export class SeasonsComponent implements OnInit, OnDestroy {
    name: string;
    players: Observable<Player[]>;
    playerIds: string[];
    playersListSubscription: Subscription;
    seasons: Observable<Season[]>;
    seasonsListSubscription: Subscription;

    ngOnInit() {
        this.playersListSubscription = MeteorObservable.subscribe('playersList').subscribe((tmp) => {
            this.players = Players.find();
            this.players.subscribe((players)=> {
                this.playerIds = _.map(_.where(players, {deleted: false}), function(player) {
                    return player._id;
                });
            })
        });
        this.seasonsListSubscription = MeteorObservable.subscribe('seasonsList').subscribe(() => {
            this.seasons = Seasons.find();
        });
    }

    ngOnDestroy() {
        if (this.playersListSubscription) {
            this.playersListSubscription.unsubscribe();
        }
        if (this.seasonsListSubscription) {
            this.seasonsListSubscription.unsubscribe();
        }
    }

    addSingleRound() {
        if (this.name && this.name !== '') {
            Meteor.call('addSeason', this.name, SeasonType.singleRound, this.playerIds);
            this.name = null;
        }
    }
    addDoubleRound() {
        if (this.name && this.name !== '') {
            Meteor.call('addSeason', this.name, SeasonType.doubleRound, this.playerIds);
            this.name = null;
        }
    }

    closeSeason(_id: string) {
        Meteor.call('closeSeason', _id);
    }

    openSeason(_id: string) {
        Meteor.call('openSeason', _id);
    }
}
