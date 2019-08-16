function solve(n) {
    let chessboard = '<div class="chessboard">' + "\n";

    for (let i = 0; i < n; i++) {
        chessboard += "  <div>" + "\n";

        for (let j = 0; j < n; j++) {
            const blackOrWhite = (i + j) % 2 === 0 ? "black" : "white";

            chessboard += `    <span class="${blackOrWhite}"></span>` + "\n";
        }

        chessboard += "  </div>" + "\n";
    }

    chessboard += "</div>";

    console.log(chessboard);
}
