const btn = document.querySelector('.btn')
const start = document.querySelector('.start')
const titrep = document.querySelector('.titrep')
const rep = document.querySelector('.reponse')
const msg = document.querySelector(`.message`)
const titre = document.querySelector(`.titre`)
const qqq = document.querySelector('.qqq')

const nouvellepartie = document.querySelector(".btnnew")

const q = document.querySelector('.question')

const compteur = document.querySelector('.compteur')
const affichagepoint = document.querySelector('.affichagepoint')
const inputbtn = document.querySelector('.inputbtn')



const q1 = "qui a peint la joconde"
const q2 = "En quelle année a eu lieu la Révolution française ?"
const q3 = "Quelle planète est la plus proche du Soleil ?"
const q4 = "Quel pays possède le plus grand nombre de fuseaux horaires ?"
const q5 = "Quel traité a mis fin à la Première Guerre mondiale ?"
const q6 = "Quel peintre a réalisé La Nuit étoilée ?"

count = 1
point = 0



// start.addEventListener(`click`, function () {
//     inputbtn.classList.toggle("hidden")
//     titre.classList.toggle("hidden")
//     qqq.classList.toggle("hidden")
//     start.classList.toggle("hidden")
//     titrep.classList.toggle("hidden")
// })

function barreprogression() {
    const progression =document.querySelector(".progression")
    width = 0
    
    width += 2

    progression.style.width += width + "%"
    
}



function add() {
    const messagefin = document.querySelector(".messagefin")
    count++
    compteur.innerText = `Question ${count} /10`
    if (count === 10) {
    // btn.disabled= true
    btn.classList.toggle("hidden")
    nouvellepartie.classList.toggle("hidden")
    messagefin.innerText = `Partie terminé`
    msg.classList.add("hidden")
     }
    return 
}

function compteurpoints() {
    
    point++
    affichagepoint.innerText = `points ${point}`
    return 
}

function clear(target) {
    target.value = ""
}


function question() {

    if (count === 1) {
        q.innerText = q1
    }
    else if (count === 2) {
        q.innerText = q2
    } else if (count === 3) {
        q.innerText = q3
    } else if (count === 4) {
        q.innerText = q4
    } else if (count === 5) {
        q.innerText = q5
    }
    else if (count === 6) {
        q.innerText = q6
    }
    return


}

function reponse() {

    if (count === 1 && rep.value == "leonard de vinci") {
        msg.innerText = "Bonne reponse a la Q1"
        compteurpoints()
    } else if (count === 2 && rep.value == "1789") {
        msg.innerText = "Bonne reponse a la Q2"
        compteurpoints()
    }  else if (count === 3 && rep.value == "Mercure") {
        msg.innerText = "Bonne reponse a la Q3"
        compteurpoints()
    }   else if (count === 4 && rep.value == "La France") {
        msg.innerText = "Bonne reponse a la Q4"
      compteurpoints()
    }  else if (count === 5 && rep.value == "Le traité de Versailles") {
        msg.innerText = "Bonne reponse a la Q5"
        compteurpoints()
    }  else if (count === 6 && rep.value == "van Gogh") {
        msg.innerText = "Bonne reponse a la Q6"
    compteurpoints()
    } else {
        msg.innerText = "Mauvaise reponse"
    }
    return
}






question()
compteur.innerText = `Question ${count} /10`

btn.addEventListener(`click`, function () {
    reponse()
    add()
    question()
    barreprogression()
    clear(rep)
})





nouvellepartie.addEventListener(`click`, function () {
   location.reload();
})




affichagepoint.innerText = `points ${point}`














