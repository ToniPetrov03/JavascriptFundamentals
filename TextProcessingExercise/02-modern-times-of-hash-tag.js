function solve(text) {
    const validHashTags = text.match(/#[a-z]+/gi);

    if (validHashTags) {
        validHashTags.forEach(validHashTag => console.log(validHashTag.slice(1)));
    }
}
