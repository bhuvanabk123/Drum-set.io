function playSound(e){
        // select the audio element using querySelector.
        const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
        //From the data-key attribute, know which key-code is being pressed on keyboard using e.keycode.
        const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return; // If there is no audio for the respective key-code, then return.
        audio.currentTime=0; // when a key is clicked repetatively, rewind.
        audio.play();
        key.classList.add('playing');
    
}
// Function to remove Transition. 
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
// Selecting all the key on the page
const keys=document.querySelectorAll('.key');
// There are more keys so we need forEach to listen to each one of them.
keys.forEach(key =>
    key.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown', playSound);