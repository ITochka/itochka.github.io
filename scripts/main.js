let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/smile.png') {
        myImage.setAttribute('src', 'images/sad.png');
    } else {
        myImage.setAttribute('src', 'images/smile.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Let me tell you about my cat, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName()
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Let me tell you about my cat, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}