function solve(arr) {
    const systemsRegister = {};

    arr.forEach(system => {
        system = system.split(' | ');

        const systemName = system[0];
        const componentName = system[1];
        const subComponentName = system[2];

        if (systemsRegister[systemName]) {
            if (systemsRegister[systemName][componentName]) {
                systemsRegister[systemName][componentName].push(subComponentName);
            } else {
                systemsRegister[systemName][componentName] = [subComponentName];
            }
        } else {
            systemsRegister[systemName] = {[componentName]: [subComponentName]};
        }
    });

    const sortedRegister = Object.keys(systemsRegister).sort((a, b) => Object.keys(systemsRegister[b]).length - Object.keys(systemsRegister[a]).length || a.localeCompare(b));

    sortedRegister.forEach(system => {
        console.log(system);

        const sortedComponents = Object.keys(systemsRegister[system]).sort((a, b) => systemsRegister[system][b].length - systemsRegister[system][a].length);

        sortedComponents.forEach(component => {
            console.log('|||' + component);

            systemsRegister[system][component].forEach(subComponent => console.log('||||||' + subComponent));
        });
    });
}
