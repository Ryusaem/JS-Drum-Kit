window.onload = function() {
    

    function removeTransition(event){
        if (event.propertyName != 'transform') return; // skip if it's not a transform
        console.log(event.propertyName);
        this.classList.remove('playing');
    }


    function playSound(event) {
        // console.log(event.keyCode);
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); //we are using the *ATTRIBUTE SELECTOR* from CSS, targeting element[attribute="value"] to select all audio element, with the attribute *data-key* with the a number generated from the event.keyCode
            // console.log(audio);
        if (!audio) return; // it stop the function from running altogether.
            // console.log(event)  

        audio.currentTime = 0; // it rewind the sound.
        audio.play();

        const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
            // console.log(key)
        key.classList.add('playing');
    }


    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);

}