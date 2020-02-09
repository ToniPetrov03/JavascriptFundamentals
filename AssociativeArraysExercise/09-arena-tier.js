function solve(arr) {
    const commands = arr.slice(0, arr.indexOf('Ave Cesar'));

    const gladiatorsData = commands.reduce((obj, command) => {
        const [name1, name2, skillStr] = command.split(/ -> | vs /);
        const skill = parseInt(skillStr);

        if (skill) {
            if (obj[name1]) {
                if (!obj[name1][name2] || obj[name1][name2] < skill) {
                    obj[name1][name2] = skill;
                }
            } else {
                obj[name1] = {[name2]: skill}
            }
        } else {
            //Battle
            if (name1, name2 in obj) {
                Object.keys(obj[name1]).filter(technique => obj[name2][technique]).some(technique => {
                    if (obj[name1][technique] > obj[name2][technique]) {
                        return delete obj[name2];
                    } else if (obj[name1][technique] < obj[name2][technique]) {
                        return delete obj[name1];
                    }
                })
            }
        }

        return obj
    }, {});

    const totalSkills = Object.keys(gladiatorsData).reduce((obj, gladiator) =>
        (obj[gladiator] = Object.values(gladiatorsData[gladiator]).reduce((totalSkill, skill) => totalSkill + skill, 0), obj), {});

    const sortedGladiators = Object.keys(gladiatorsData).sort((a, b) => totalSkills[b] - totalSkills[a] || a.localeCompare(b));

    console.log(sortedGladiators.map(gladiator => {
        const sortedTechniques = Object.keys(gladiatorsData[gladiator]).sort((a, b) => gladiatorsData[gladiator][b] - gladiatorsData[gladiator][a] || a.localeCompare(b));

        return `${gladiator}: ${totalSkills[gladiator]} skill\n` + sortedTechniques.map(technique => `- ${technique} <!> ${gladiatorsData[gladiator][technique]}`).join('\n');
    }).join('\n'));
}
