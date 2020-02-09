function solve(playersData) {
    const cardType = {
        'C': 1,
        'D': 2,
        'H': 3,
        'S': 4,
    };

    const cardPower = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    };

    const players = playersData.reduce((obj, playerData) => {
        const [playerName, playerCardsStr] = playerData.split(': ');
        const playerCards = playerCardsStr.split(', ');

        if (obj[playerName]) {
            obj[playerName] = new Set([...playerCards, ...obj[playerName]]);
        } else {
            obj[playerName] = new Set(playerCards);
        }

        return obj;
    }, {});

    return Object.entries(players).map(([player, cards]) => {
        const playerScore = [...cards].reduce((score, card) => {
            const [, power, type] = /([A-Z]|[0-9]{1,2})([A-Z])/.exec(card);

            return score + cardPower[power] * cardType[type];
        }, 0);

        return `${player}: ${playerScore}`;
    }).join('\n');
}
