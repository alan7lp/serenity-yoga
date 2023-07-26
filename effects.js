var MySong = document.getElementById("MySong");
var icon = document.getElementById("icon");     

icon.onclick = function() {
    if(MySong.paused) {
        MySong.play();
        icon.src = "Images/Pause.png";
    } else {
        MySong.pause();
        icon.src = "Images/Play.png";
    }
}

var descriptionWords = document.querySelectorAll('.studio-description span');

for (let i = 0; i < descriptionWords.length; i++) {
    // Delay the start of the animation for each word
    descriptionWords[i].style.animationDelay = (i * 0.5) + 's'; // Adjust the delay as needed
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    // Get the form element by its ID
    var form = document.getElementById('contact-form');
    // Add an event listener to the form's submit event
    form.addEventListener('submit', function(){
        // Reset the form after a delay to ensure the form data is sent first
        setTimeout(function() {
            form.reset();
        }, 100);
    });
});
