/* const prompt = require('prompt-sync')() */
let nextMove = ''
let playerName = ''
let questionOne = ''
let playerGender = ''

console.log('\n\n\tVous venez de quitter votre village aujourd\'hui.\n\tVous avez versé quelques chaudes larmes en disant au revoir à vos parents et vos amis.\n\tAvec un fragile bâton et un chaud manteau à capuche, \n\tvous parcourez les chemins enneigés pour réaliser votre rêve... devenir magicien !\n\tVous vous rendez à l\'École des Lumières de Dalmior de Nioden.\n\n')

do {
  nextMove = prompt('\tPress Y continue or n to quit: ')
} while ((nextMove === '' || nextMove.length > 0) && nextMove != 'Y' && nextMove != 'n')

if (nextMove === 'Y') {
  console.log('\n\tLe puissant et célèbre illusionniste Dalmior De Nioden, \n\tvous accueille en personne, vous êtes très honoré !\n')
  while (playerName === '') {
    playerName = prompt('\n\t - Bienvenu dans mon école, jeune aventurier. \n\tJe suis Dalmior De Nioden, \n\tle plus puissant des illusionnistes de cette terre. \n\tEt toi, quel est ton nom ?\n')
  }
  while ((playerGender === '' || playerGender.length > 0) && playerGender != '1' && playerGender != '2') {
    console.log('\n\n\tEt je ne vois pas bien ton visage sous ta capuche, es-tu un garçon ou une fille ?  - demande Dalmior\n\n')
    playerGender = prompt('\n\t1. un garçon\n\t2. une fille\n ')
  }
  if (playerGender == 1) {
    playerGender = 'mon garcon'
  } else if (playerGender == 2) {
    playerGender = 'ma fille'
  }
  console.log(`\n\tBien, dit Dalmior, j\'essaierai de m\'en souvenir... \n\tmmm... comment t\'appelles-tu déjà ? Ah ! oui ! ${playerName}. \n\tParfois, ma mémoire me joue des tours ! Je te dis au revoir, \n\tje dois retourner travailler maintenant. \n\tEt toi aussi, tu dois commencer ton entraînement au plus vite. \n\tJe te conseille d'y aller maintenant !\n`)
  console.log('\t***\n')

  while ((questionOne === '' || questionOne.length > 0) && questionOne != '1' && questionOne != '2') { questionOne = prompt(`\t${playerName}, ${playerGender}, Qu\'allez-vous faire? :\n\t1. : Suivre le conseil de Dalmior et aller s'entraîner maintenant.\n\t2. : Ou bien, aller se promener un peu dans le Jardin avant`)
  }

  if (questionOne == '1') {
    console.log(`\n\tVous entrez à l'intérieur de l'école des lumières, dans une salle très vaste.\n\tLes plafonds sont très hauts et éclairent la salle de lumières multicolores.`)
    console.log('\n\t***\n')
    console.log(`\tSur la droite, vous apercevez un étrange personnage\n\ten train de regarder une boule lumineuse. \n\tC'est sûrement votre maître. Mais sur la gauche,\n\til y a un étrange miroir, qui attire votre attention...`)
  } else if (questionOne == '2') {
    console.log(`\n\tLe jardin de l'école est grandiose.\n\tIl est bien fleuri à cette saison, et les fleurs sont très odorantes.`)
    console.log('\n\t***\n')
    console.log(`\tSoudain, vous croisez le jardinier Edgar.\n\tIl n'a pas l'air très content de vous voir par ici.`)
  }

} else if (nextMove === 'n') {
  console.log('\n\n\t*****************\n\t*** Game over ***\n\t*****************\n')
}

