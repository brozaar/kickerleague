import { Meteor } from 'meteor/meteor';

import { Players } from '../../../imports/collections/players';

Meteor.publish('playersList', function() {
  return Players.find({});
});
