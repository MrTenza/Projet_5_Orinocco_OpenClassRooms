
/* Import de l'Id "listTeddies"qui est dans le code html */

const listTeddies = document.getElementById ('listTeddies');


/* Requete XMLHttpRequest pour récupérer l'API des oursons */

getAllTeddies ();


/* Création d'une fonction pour mettre en place les donnée récupérées de l'API */

function teddiesApi (data) {

/***** CONTAINER DE LA PAGE *****/
    let masterContainer = document.createElement ("div");                               //=> Création d'un container <div> 
    masterContainer.setAttribute ("class", "card") ;                                    //=> On lui attribut une classe 
    listTeddies.appendChild (masterContainer);                                          //=> On lui déclare son parent 
        let bodyContainer = document.createElement ("div");                             //=> Création d'un container <div>
        bodyContainer.setAttribute ("class", "card-body");                              //=> On lui attribut une classe 
        masterContainer.appendChild (bodyContainer);                                    //=> On lui déclare son parent 


/***** IMAGES DES OURSONS *****/
    let pictureIndexTeddies = document.createElement ("img");                           //=> Création d'une balise <img>
    pictureIndexTeddies.setAttribute ("src",data.imageUrl);                             //=> Chemin de l'image
    pictureIndexTeddies.setAttribute ("class","card-img-top");                          //=> On lui attribut une classe 
    pictureIndexTeddies.setAttribute ("alt" , "image d'un ourson en peluche");          //=> On lui attribut une balise "alt"
    bodyContainer.appendChild (pictureIndexTeddies);                                    //=> On lui déclare son parent


/***** SOUS TITRE + NOM DES OURSONS *****/
    let titleIndexPicture = document.createElement ("h3");                              //=> Création d'une balise <h3>
    titleIndexPicture.setAttribute ("class" , "card-title");                            //=> On lui attribut une classe
    bodyContainer.appendChild (titleIndexPicture);                                      //=> On lui déclare son parent
    titleIndexPicture.textContent = data.name;                                          //=> On lui attribut un contenu


/***** NOMS DES OURSONS *****/
    let nameIndexTeddies = document.createElement ("p");                                //=> Création d'une balise <p>
    nameIndexTeddies.setAttribute ("class" , "card-text");                              //=> On lui attribut une classe
    bodyContainer.appendChild (nameIndexTeddies);                                       //=> On lui déclare son parent
    nameIndexTeddies.textContent = "Nom: " + data.name;                                 //=> On lui attribut un contenu


/***** COULEURS DES OURSONS *****/
    let colorsIndexTeddies = document.createElement ("p");                              //=> Création d'une balise <p>
    colorsIndexTeddies.setAttribute ("class" , "card-text");                            //=> On lui attribut une classe
    bodyContainer.appendChild (colorsIndexTeddies);                                     //=> On lui déclare son parent
    colorsIndexTeddies.textContent = "Couleurs: " + data.colors;                        //=> On lui attribut un contenu


/***** DESCRIPTIONS DES OURSONS *****/
    let descriptionIndexTeddies = document.createElement ("p");                         //=> Création d'une balise <p>
    descriptionIndexTeddies.setAttribute ("class" , "cards-text");                      //=> On lui attribut une classe
    bodyContainer.appendChild (descriptionIndexTeddies);                                //=> On lui déclare son parent
    descriptionIndexTeddies.textContent = "Description: " + data.description;           //=> On lui attribut un contenu


/***** PRIX DES OURSONS *****/
    let priceIndexTeddies = document.createElement ("p");                               //=> Création d'une balise <p>
    priceIndexTeddies.setAttribute ("class" , "card-text");                             //=> On lui attribut une classe
    bodyContainer.appendChild (priceIndexTeddies);                                      //=> On lui déclare son parent
    priceIndexTeddies.textContent = "Prix: " + data.price/100 + " €";                   //=> On lui attribut un contenu


/***** CONTAINER BOUTON PAGE PRODUIT *****/
    let btnIndexContainer = document.createElement ("div");                             //=>  Création d'un container <div>
    btnIndexContainer.setAttribute ("class" , "cards__item--button");                   //=> On lui attribut une classe
    btnIndexContainer.setAttribute ("id" , "btnProduct");                               //=> On lui attribut un <ID>
    bodyContainer.appendChild (btnIndexContainer);                                      //=> On lui déclare son parent


/***** BOUTON PAGE PODUIT *****/
    let btnIndexProduct = document.createElement ("a");                                 //=> Création d'une balise <a>
    btnIndexProduct.setAttribute ("class" , "btn btn-outline-info");                    //=> On lui attribut une classe
    btnIndexProduct.setAttribute ("id" , "btnIndexProduct");                            //=> On lui attribut un <ID>
    btnIndexProduct.setAttribute ("href" , "./product.html?id="+ data._id);             //=> Chemin du bouton 
    btnIndexContainer.appendChild (btnIndexProduct);                                    //=> On lui déclare son parent
    btnIndexProduct.textContent = "Voir l'ourson ";                                     //=> On lui attribut un contenu 
};

