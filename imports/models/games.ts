export interface Game {
    _id?: string;
    seasonId: string;
    player1_1: string;
    player1_2: string;
    player2_1: string;
    player2_2: string;
    result?: GameResult;
}

export interface GameResult {
    set1?: SetResult;
    set2?: SetResult;
    set3?: SetResult;
}

export interface SetResult {
    team1: number;
    team2: number;
}