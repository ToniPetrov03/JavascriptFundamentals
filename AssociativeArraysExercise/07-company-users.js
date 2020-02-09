function solve(companiesData) {
    const companies = companiesData.reduce((obj, companyData) => {
        const [name, id] = companyData.split(' -> ');

        if (obj[name]) {
            obj[name].add(id);
        } else {
            obj[name] = new Set([id]);
        }

        return obj;
    }, {});


    return Object
        .keys(companies)
        .sort((a, b) => a.localeCompare(b))
        .map(name => name + '\n' + [...companies[name]]
            .map(id => '-- ' + id)
            .join('\n'))
        .join('\n');
}
