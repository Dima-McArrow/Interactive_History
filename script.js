const prompt = require('prompt-sync')()
let nextMove = ''
let playerName = ''
let questionOne = ''
let playerGender = ''

console.log('\n\n\tVous venez de quitter votre village aujourd\'hui.\n\tVous avez versé quelques chaudes larmes en disant au revoir à vos parents et vos amis.\n\tAvec un fragile bâton et un chaud manteau à capuche, vous parcourez les chemins enneigés pour réaliser votre rêve... devenir magicien !\n\tVous vous rendez à l\'École des Lumières de Dalmior de Nioden.\n\n')

do {
  nextMove = prompt('\tPress Y continue or n to quit: ')
} while ((nextMove === '' || nextMove.length > 0) && nextMove != 'Y' && nextMove != 'n')

if (nextMove === 'Y') {
  console.log('Le puissant et célèbre illusionniste Dalmior De Nioden, vous accueille en personne, vous êtes très honoré !')
  while (playerName === '') {
    playerName = prompt('\n\t - Bienvenu dans mon école, jeune aventurier. Je suis Dalmior De Nioden, le plus puissant des illusionnistes de cette terre. Et toi, quel est ton nom ?\n')
  }
  while ((playerGender === '' || playerGender.length > 0) && playerGender != '1' && playerGender != '2') {
    console.log('\n\n\tEt je ne vois pas bien ton visage sous ta capuche, es-tu un garçon ou une fille ?  - demande Dalmior\n\n')
    playerGender = prompt('\n1. un garçon\n2. une fille\n ')
  }
  if (playerGender == 1) {
    playerGender = 'garcon'
  } else if (playerGender == 2) {
    playerGender = 'fille'
  }
  console.log(`\n\tBien, dit Dalmior, j\'essaierai de m\'en souvenir... \n\tmmm... comment t\'appelles-tu déjà ? Ah ! oui ! ${playerName}. \n\tParfois, ma mémoire me joue des tours ! Je te dis au revoir, \n\tje dois retourner travailler maintenant. \n\tEt toi aussi, tu dois commencer ton entraînement au plus vite. Je te conseille d'y aller maintenant !\n\n`)
  
} else if (nextMove === 'n') {
  console.log('\n\n\t*****************\n\t*** Game over ***\n\t*****************\n')
}

