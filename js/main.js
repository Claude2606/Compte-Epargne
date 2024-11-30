// Déclaration Variables
const tauxIntere = 0.03;
let solde = 1000;
let depot = 200;
let retrait = 150;
let historique = [];

// Fonction Dépot d'argent
function addDepot(solde, depot) {
    let newSolde = solde + depot;
    console.log("Vous avez déposé " + depot + " euros. Nouveau solde: " + newSolde + " euros");
    return newSolde;
}

historique.push("Dépot de" + depot + "euros sur votre compte");
console.log(addDepot(solde, depot));

// Fonction Retrait d'argent
function retraitSolde(solde, retrait) {
    if (retrait <= solde) {
        let soldeAfterRetrait = solde - retrait;
        console.log("Vous avez prélevé " + retrait + " euros. Nouveau solde: " + soldeAfterRetrait + " euros");
        return soldeAfterRetrait;
    } else {
        return Message = "Solde insuffisant !";
    }

}

historique.push("Retrait de" + retrait + "euros sur votre compte");
console.log(retraitSolde(solde, retrait));

// Calcules du solde avec les intérêts
function soldeInteret(solde, tauxInteret) {
    let soldeWithInteret = (solde*tauxInteret)+solde;
    soldeWithInteret = Math.round(soldeWithInteret);
    return soldeWithInteret;
}

historique.push("Intérêts de 3% ajouté à votre solde");
console.log("Intérêts de 3% ajoutés. Nouveau solde : " + soldeInteret(solde, tauxInteret) + " euros");

// Simulation de Plusieurs Opérations
let nouveauDepot = 500;
console.log("Vous avez déposé "+ nouveauDepot +" euros. Nouveau solde: "+ addDepot(solde, nouveauDepot)+ " euros");
solde = addDepot(solde, nouveauDepot);
console.log("Dépot de 500 euros");
historique.push("Dépot de 500 euros");


let nouveauRetrait = 800
if (nouveauRetrait <= solde) {
    solde = solde-nouveauRetrait;
    console.log("Retrait de 800 euros");
    historique.push("Retrait de 800 euros");
} else {
    return Message = "Solde insuffisant !";
}

let newsoldeWithInteret = (solde*tauxInteret)+solde;

console.log("Intérêts de 3% ajoutés. Nouveau solde: " + newsoldeWithInteret + " euros");
historique.push("Intérêts de 3% ajouté a votre solde");

console.table(historique);



