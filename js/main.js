const tauxIntere = 0.03 
let solde = 1000
let depot = 200
let retrait = 150

// Dépot
function addDepot(solde, depot) {
    let newSolde = solde + depot
    console.log("Vous avez déposé " + depot + " euros. Nouveau solde: " + newSolde + " euros")
    return newSolde
}

console.log(addDepot(solde, depot))

// Retrait
function retraitSolde(solde, retrait) {
    if (retrait <= solde) {
        let soldeAfterRetrait = solde - retrait
        console.log("Vous avez prélevé " + retrait + " euros. Nouveau solde: " + soldeAfterRetrait + " euros")
        return soldeAfterRetrait
    } else {
        return Message = "Solde insuffisant !"
    }

}

console.log(retraitSolde(solde, retrait))

// Calcules intérets
function soldeInteret(solde, tauxInteret) {
    let soldeWithInteret = (solde*tauxInteret)+solde
    soldeWithInteret = Math.round(soldeWithInteret)
    return soldeWithInteret
}

console.log("Intérêts de 3% ajoutés. Nouveau solde : " + soldeInteret(solde, tauxInteret) + " euros")

// Simulation Plusieurs Opérations
let nouveauDepot = 500
console.log("Vous avez déposé "+ nouveauDepot +" euros. Nouveau solde: "+ addDepot(solde, nouveauDepot)+ " euros")
solde = addDepot(solde, nouveauDepot)

let nouveauRetrait = 800

if (nouveauRetrait <= solde) {
    solde = solde-nouveauRetrait
} else {
    return Message = "Solde insuffisant !"
}

console.log("Intérêts de 3% ajoutés. Nouveau solde: "+soldeInteret(solde, tauxInteret)+" euros")



