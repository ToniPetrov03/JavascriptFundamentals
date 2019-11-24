function solve(text) {
    const nameAndExtension = text.split('\\').pop().split('.');
    const fileExtension = nameAndExtension.pop();
    const fileName = nameAndExtension.join('.');

    console.log('File name: ' + fileName);
    console.log('File extension: ' + fileExtension);
}
