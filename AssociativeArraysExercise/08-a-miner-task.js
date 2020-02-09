function solve(arr) {
    const resources = arr.reduce((map, resource, index) => {
        if (index % 2 === 0) {
            const quantity = parseInt(arr[index + 1]);

            map.set(resource, (map.get(resource) || 0) + quantity);
        }

        return map;
    }, new Map());

    resources.forEach((quantity, resource) => console.log(resource + ' -> ' + quantity));
}
