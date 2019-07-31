function solve(country) {
    console.log(getLanguagesByCountry(country));

    function getLanguagesByCountry(country) {
        switch (country) {
            case "England":
            case "USA":
                return "English";
            case "Spain":
            case "Argentina":
            case "Mexico":
                return "Spanish";
            default:
                return "unknown";
        }
    }
}
