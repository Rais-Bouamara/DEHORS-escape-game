fetch('escapegame.json')
    .then(response => response.json())
    .then(escapegame => {

        console.log(escapegame)

        afficheAvantagesClients(escapegame)
        afficheActivites(escapegame)
        afficheTemoignages(escapegame.temoignages)




    })
//role : afficher les activité proposer qui sont dans data
//parametre : data
//return : rien
/*section 1 avec les activité proposer*/
function afficheActivites(escapegame) {


    escapegame.activites.forEach(activite => {
        let nom = activite.nom
        let description = activite.description
        let image = activite.imageUrl


    });

    escapegame.activites.forEach(activite => {
        document.getElementById("containerActivite").innerHTML += `
            

                <div class= "buttonred p50 flex space-between mgt100 w25">
                    <h3>
                    ${activite.nom}</h3>
                    <img src="${activite.imageUrl}" alt="" srcset="" class ="w50 bordrond">
                    <p>${activite.description}</p>
                </div>

            `});

}
//role : afficher les témoignage clients qui sont dans data
//parametre : data
//return : rien
/*section 2 avec les temoignage d'escapeur*/
function afficheTemoignages(temoignages) {
    


    temoignages.forEach(temoignage => {
        let prenom = temoignage.prenom
        let typeExperience = temoignage.typeExperience
        let commentaire = temoignage.commentaire
        let note = temoignage.note

    });

    temoignages.forEach(temoignage => {
        document.getElementById("containerTemoignage").innerHTML += `
            
                <div class= "buttonred w25 p50 mgt100">
                    <img src="asset/Ellipse 1.png" alt="" srcset="">
                    <h3>${temoignage.prenom}</h3>
                    <h3>${temoignage.typeExperience}</h3>
                    <p>${temoignage.commentaire}</p>
                    <h3>${temoignage.note}</h3>
                </div>`})
           

}

//role : afficher les avantages clients qui sont dans data
//parametre : data
//return : rien

/*section 3 avec les avantages client*/
function afficheAvantagesClients(data) {


    data.avantagesClients.forEach(avantage => {

        document.getElementById("containerAvantage").innerHTML += ` 
            
                <div class="w25 p50 cardblack flex space-between mgt100">
                    <img src="${avantage.img}" alt="" srcset="">
                    <p>${avantage.phrase}</p>
                </div>
                `;
    });



}