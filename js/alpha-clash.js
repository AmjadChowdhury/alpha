function play(){
    // step 1 : hide the home screen...
    // step 2 : show the playground...
    
    // hide home Section
    const homeSec = document.getElementById('homeSection');
    homeSec.classList.add('hidden')

    // show the play ground

    const playSec = document.getElementById('playSection');
    playSec.classList.remove('hidden');

    continueGame();
}


function randomAlphabets(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    
    return alphabet;
}

function continueGame(){
    const alphabet = randomAlphabets();
    
    // set color on screen
    const currentAlpha = document.getElementById('currentAlpha');
    currentAlpha.innerText = alphabet;

}