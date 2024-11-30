const tauxIntere = 0.03 
let solde = 1000
let depot = 200
let retrait = 150


// Dépot argent
function addDepot(solde, depot) {
    let newSolde = solde + depot
    console.log("Vous avez déposé " + depot + " euros. Nouveau solde: " + newSolde + " euros")
    return newSolde
}

console.log(addDepot(solde, depot))


// Retrait argent
function retraitSolde(solde, retrait) {
    let soldeAfterRetrait = solde - retrait
    console.log("Vous avez retiré " + retrait + " euros. Nouveau solde: " + soldeAfterRetrait + " euros")
    return soldeAfterRetrait
}

console.log(retraitSolde(solde, retrait))


// Calcules intérets
function soldeInteret(solde, tauxInteret){
    let soldeAfterInteret = (solde*tauxInteret)+solde
    return soldeAfterInteret
}

console.log("Intérêts de 3% ajoutés. Nouveau solde : " + soldeInteret(solde, tauxInteret) + " euros")


