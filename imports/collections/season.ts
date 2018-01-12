import { MongoObservable } from 'meteor-rxjs';

import {Season} from '../models/season';

export const Seasons = new MongoObservable.Collection<Season>('season');
