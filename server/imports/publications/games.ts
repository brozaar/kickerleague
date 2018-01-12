import { Meteor } from 'meteor/meteor';

import {Games} from '../../../imports/collections/games';

Meteor.publish('gamesList', function() {
  return Games.find({});
});
