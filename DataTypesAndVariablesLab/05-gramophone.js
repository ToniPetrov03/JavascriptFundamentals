function solve(nameOfBand, nameOfAlbum, nameOfSong) {
    const durationOfSong = nameOfBand.length * nameOfAlbum.length * nameOfSong.length / 2;
    const rotations = Math.ceil(durationOfSong / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);
}
