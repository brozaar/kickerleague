import { MongoObservable } from 'meteor-rxjs';

import { Player } from '../models/player';

export const Players = new MongoObservable.Collection<Player>('player');
