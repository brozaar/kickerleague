import {Meteor} from 'meteor/meteor';

import {Players} from '../../../imports/collections/players';

Meteor.methods({
    addPlayer(name: string) {
        const deleted = false;
        Players.insert({
            name, deleted
        });
    },
    removePlayer(_id: string) {
        Players.update(_id, {$set: {deleted: true}})
    },
    restorePlayer(_id: string) {
        Players.update(_id, {$set: {deleted: false}})
    }
});
