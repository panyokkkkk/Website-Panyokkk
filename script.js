const texts = [
    "Web Developer Pemula",
    "Siswa XII RPL 1",
    "HTML • CSS • JavaScript • PHP • Git"
];

let textIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeText(){

    if(charIndex < texts[textIndex].length){

        typing.textContent += texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText,80);

    }else{

        setTimeout(deleteText,1500);

    }

}

function deleteText(){

    if(charIndex > 0){

        typing.textContent =
        texts[textIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteText,40);

    }else{

        textIndex++;

        if(textIndex >= texts.length){
            textIndex = 0;
        }

        setTimeout(typeText,300);

    }

}

typeText();

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section => {

section.classList.add("hidden");

observer.observe(section);

});
