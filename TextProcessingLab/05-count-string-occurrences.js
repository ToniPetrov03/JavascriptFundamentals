function solve(text, searchedWord) {
    return text.split(' ').filter(word => word === searchedWord).length;
}
