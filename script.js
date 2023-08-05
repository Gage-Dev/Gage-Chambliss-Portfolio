document.addEventListener("DOMContentLoaded", function() {
    const letters = document.querySelectorAll('.Gage span');
    let currentIndex = 0;

    function addJitterAnimation() {
        const currentLetter = letters[currentIndex];
        currentLetter.style.animation = "jitterAnimation 1s";

        setTimeout(() => {
            currentLetter.style.animation = "";
            currentIndex = (currentIndex + 1);
            addJitterAnimation();
        }, 600);
    }    

    function applyRotation() {
        letters[3].style.transform = 'rotate(-23deg)';
    }

    applyRotation();

    addJitterAnimation();
});