function createGame(player1, hour, player2){
    return `
    <li>
            <img src="./assets/logo-${player1}.svg" alt="Bandeira do ${player1}" width="50px">
            <strong>${hour}</strong>
            <img src="./assets/logo-${player2}.svg" alt="Bandeira do ${player2}" width="50px">
        </li>
    `
}

let delay = 0.2; 
function createCard(date, day, games) {
    delay = delay + 0.2;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul>
        ${games}
    </ul>
</div>
    `
}

document.querySelector("#app").innerHTML = `
    <header>
    <img src="./assets/logo.svg" alt="Logo da NLW">
    </header>
    <main id="cards">
    ${createCard("24/11", "quinta",createGame('brazil','16:00','serbia'))}
    ${createCard("28/11", "segunda",createGame('brazil','13:00','switzerland'))}
    ${createCard("02/12", "sexta",createGame('cameroon','16:00','brazil'))}
    </main>
`