function solve(arr) {
    const add = (players, name, healthStr, energyStr) => {
        const health = parseInt(healthStr, 10);
        const energy = parseInt(energyStr, 10);

        const {[name]: player} = players;
        const newPlayer = player ? {...player, health: player.health + health } : { health, energy };

        return {
            ...players,
            [name]: newPlayer
        };
    };

    const attack = (players, attackerName, defenderName, damage) => {
        const {[attackerName]: attacker, [defenderName]: defender} = players;

        if (!attacker || !defender) return players;

        const health = defender.health - damage;
        const updatedDefender = health <= 0 ? (console.log(`${defenderName} was disqualified!`), {}) : {
            [defenderName] : {
                ...defender,
                health
            }
        };

        const energy = attacker.energy - 1;
        const updatedAttacker = energy <= 0 ? (console.log(`${attackerName} was disqualified!`), {}) : {
            [attackerName]: {
                ...attacker,
                energy
            }
        };

        const {
            [attackerName]: attackerToDelete,
            [defenderName]: defenderToDelete,
            ...playersWithoutAttackerAndDefender
        } = players;

        return {
            ...playersWithoutAttackerAndDefender,
            ...updatedAttacker,
            ...updatedDefender
        };
    };

    const del = (players, playerName) => {
        const { [playerName]: playerToDelete, ...newState } = players;

        return playerName === 'All' ? { } : newState;
    };

    const actions = {
        Add: add,
        Attack: attack,
        Delete: del
    };

    const commands = arr.slice(0, -1);

    const players = commands.reduce((pls, command) => {
        const [action, ...args] = command.split(':');

        return actions[action](pls, ...args);
    }, {});

    const sortedPlayers = Object.keys(players).sort((a, b) => players[b].health - players[a].health || a.localeCompare(b));

    console.log(`People count: ${sortedPlayers.length}`);
    console.log(sortedPlayers.map(player => `${player} - ${players[player].health} - ${players[player].energy}`).join("\n"));
}