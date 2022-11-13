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
    ${createCard("20/11","domingo",createGame('qatar', '13:00', 'equador'))}
    ${createCard("21/11","segunda",createGame('england', '10:00','iran'))}
    ${createCard("21/11","segunda",createGame('senegal', '13:00', 'netherlands'))}
    ${createCard("21/11","segunda",createGame('us', '16:00', 'wales'))}
    ${createCard("22/11","terça",createGame('argentina', '07:00', 'arabia'))}
    ${createCard("22/11","terça",createGame('denmark', '10:00', 'tunisia'))}
    ${createCard("22/11","terça",createGame('mexico', '13:00', 'poland'))}
    ${createCard("22/11","terça",createGame('france', '16:00', 'australia'))}
    ${createCard("23/11","quarta",createGame('morocco', '07:00', 'croatia'))}
    ${createCard("23/11","quarta",createGame('germany', '10:00', 'japan'))}
    ${createCard("23/11","quarta",createGame('spain', '13:00', 'costa'))}
    ${createCard("23/11","quarta",createGame('belgium', '16:00', 'canada'))}
    ${createCard("24/11","quinta",createGame('switzerland', '07:00', 'cameroon'))}
    ${createCard("24/11","quinta",createGame('uruguay', '10:00', 'korea'))}
    ${createCard("24/11","quinta",createGame('portugal', '13:00', 'ghana'))}
    ${createCard("24/11","quinta",createGame('brazil', '16:00', 'serbia'))}
    ${createCard("25/11","sexta",createGame('wales', '07:00', 'iran'))}
    ${createCard("25/11","sexta",createGame('qatar', '10:00', 'senegal'))}
    ${createCard("25/11","sexta",createGame('netherlands', '13:00', 'equador'))}
    ${createCard("25/11","sexta",createGame('england', '16:00', 'us'))}
    ${createCard("26/11","sabado",createGame('tunisia', '07:00', 'australia'))}
    ${createCard("26/11","sabado",createGame('poland', '10:00', 'arabia'))}
    ${createCard("26/11","sabado",createGame('france', '13:00', 'denmark'))}
    ${createCard("26/11","sabado",createGame('argentina', '16:00', 'mexico'))}
    ${createCard("27/11","domingo",createGame('japan', '07:00', 'costa'))}
    ${createCard("27/11","domingo",createGame('belgium', '10:00', 'morocco'))}
    ${createCard("27/11","domingo",createGame('croatia', '13:00', 'canada'))}
    ${createCard("27/11","domingo",createGame('spain', '16:00', 'germany'))}
    ${createCard("28/11","segunda",createGame('cameroon', '07:00', 'serbia'))}
    ${createCard("28/11","segunda",createGame('korea', '10:00', 'ghana'))}
    ${createCard("28/11","segunda",createGame('brazil', '13:00', 'switzerland'))}
    ${createCard("28/11","segunda",createGame('portugal', '16:00', 'uruguay'))}
    ${createCard("29/11","terça",createGame('equador', '12:00', 'senegal'))}
    ${createCard("29/11","terça",createGame('netherlands', '12:00', 'qatar'))}
    ${createCard("29/11","terça",createGame('iran', '16:00', 'us'))}
    ${createCard("29/11","terça",createGame('wales', '16:00', 'england'))}
    ${createCard("30/11","quarta",createGame('tunisia', '12:00', 'france'))}
    ${createCard("30/11","quarta",createGame('australia', '12:00', 'denmark'))}
    ${createCard("30/11","quarta",createGame('poland', '16:00', 'argentina'))}
    ${createCard("30/11","quarta",createGame('arabia', '16:00', 'mexico'))}
    ${createCard("01/12","quinta",createGame('croatia', '12:00', 'belgium'))}
    ${createCard("01/12","quinta",createGame('canada', '12:00', 'morocco'))}
    ${createCard("01/12","quinta",createGame('japan', '16:00', 'spain'))}
    ${createCard("01/12","quinta",createGame('costa', '16:00', 'germany'))}
    ${createCard("02/12","sexta",createGame('korea', '12:00', 'portugal'))}
    ${createCard("02/12","sexta",createGame('ghana', '12:00', 'uruguay'))}
    ${createCard("02/12","sexta",createGame('serbia', '16:00', 'switzerland'))}
    ${createCard("02/12","sexta",createGame('cameroon', '16:00', 'brazil'))}










    </main>
`