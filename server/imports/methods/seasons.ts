import {Meteor} from 'meteor/meteor';

import {Seasons} from '../../../imports/collections/season';
import {SeasonType} from '../../../imports/models/season';
import {SeasonGames} from '../models/seasonGames';

Meteor.methods({
    addSeason(name: string, type: SeasonType, players: string[]) {
        Seasons.insert({
            name, type, players
        }).subscribe((seasonId) => {
            new SeasonGames(seasonId, players);
        });
    },
    closeSeason(_id: string) {
        Seasons.update(_id, {$set: {closed: true}})
    },
    openSeason(_id: string) {
        Seasons.update(_id, {$set: {closed: false}})
    }
});
