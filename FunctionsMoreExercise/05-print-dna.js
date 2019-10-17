function solve(length) {
    const bases = ['AT', 'CG', 'TT', 'AG', 'GG'];

    let counter = 0;

    for (let i = 0; i < length; i++) {
        switch (i % 4) {
            case 0: console.log(`**${bases[counter]}**`); break;
            case 1: console.log(`*${bases[counter][0]}--${bases[counter][1]}*`); break;
            case 2: console.log(`${bases[counter][0]}----${bases[counter][1]}`); break;
            case 3: console.log(`*${bases[counter][0]}--${bases[counter][1]}*`); break;
        }

        if (counter === 4) {
            counter = 0;
        } else {
            counter++;
        }
    }
}
