
export class SeasonGames {
    private pairs_4 = [
        [0, 1, 2, 3],
        [2, 0, 3, 1],
        [1, 2, 0, 3]
    ];

    constructor(seasonsId: string, players: string[]) {
        if (players.length === 4) {
            for (let pair in this.pairs_4) {
                Meteor.call('addGame',
                    seasonsId,
                    players[this.pairs_4[pair][0]],
                    players[this.pairs_4[pair][1]],
                    players[this.pairs_4[pair][2]],
                    players[this.pairs_4[pair][3]]
                );
            }
        }
    }
}//test