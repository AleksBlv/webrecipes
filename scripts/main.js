let myImage = document.querySelector('img')

myImage.onclick = function(){
    if(myImage.getAttribute('src')=='images/food1.webp'){
        myImage.setAttribute('src', 'images/food2.jpeg')
    }else{
        myImage.setAttribute('src', 'images/food1.webp')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Here are our recepies, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Here are our recepies, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}