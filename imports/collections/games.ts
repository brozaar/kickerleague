import { MongoObservable } from 'meteor-rxjs';

import {Game} from '../models/games';

export const Games = new MongoObservable.Collection<Game>('game');
