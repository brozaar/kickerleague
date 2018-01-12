import {Meteor} from 'meteor/meteor';

import {Games} from '../../../imports/collections/games';

Meteor.methods({
    addGame(seasonId: string, player1_1: string, player1_2: string, player2_1: string, player2_2: string) {
        Games.insert({
            seasonId, player1_1, player1_2, player2_1, player2_2
        });
    },
});
