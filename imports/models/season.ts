export interface Season {
    _id?: string;
    name: string;
    type: SeasonType;
    players: string[];
    closed?: boolean;
}

export enum SeasonType {
    singleRound,
    doubleRound
}