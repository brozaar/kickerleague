import { Meteor } from 'meteor/meteor';

import {Seasons} from '../../../imports/collections/season';

Meteor.publish('seasonsList', function() {
  return Seasons.find({});
});
