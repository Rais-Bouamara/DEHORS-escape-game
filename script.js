fetch('escapegame.json')
    .then(response => response.json())
    .then(data => {

        console.log(data)
        // appeler afficheProduit a l'interieur (ici)
        afficheRecettes(data)


        data.forEach(element => {
            
        });


    })

function afficheInformations(listeinformation) {






    tableauderecettes.forEach(recette => {
        let titre = recette.nom
        let difficulté = recette.difficulte
        let description = recette.desc
        let étapes = recette.etapes
        let image = recette.img
        let portions = recette.portions
        let ingredients = recette.ingredients
        let saison =recette.saison
        let tempCuisson =recette.tempCuisson
        let tempPreparation = recette.tempPreparation

    });

    tableauderecettes.forEach(recette => {
document.getElementById("").innerHTML +=`<div class="card mgt100 ">
                                                 <img src ="${produit.image}" alt="" class="carteimg">
                                                 <div class="">
                                                 <h2 class="police">${produit.title}</h2>
                                                 <p>${produit.category}</p>
                                                 <p class="prix">${produit.price} euros </p>
                                                 <p><i class="ph-fill ph-user"></i>${produit.rating.count}</p>
                                                 <p class ="yellow"><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i>${produit.rating.rate}</p>
                                                 </div>
                                                 
                                                 <a href="" class="button2">Acheter</a>
                                                 </div>`});

}