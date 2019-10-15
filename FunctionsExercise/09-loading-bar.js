function solve(percent) {
    const loadingBar = new Array(10).fill('.');

    for (let i = 0; i < percent / 10; i++) {
        loadingBar[i] = '%'
    }

    if (percent === 100) {
        console.log('100% Complete!');
        console.log(`[${loadingBar.join('')}]`);
    } else {
        console.log(`${percent}% [${loadingBar.join('')}]`);
        console.log('Still loading...')
    }
}
