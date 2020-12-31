//challenge 1: change color of all buttons

var all_buttons = document.getElementsByTagName("button");
console.log(all_buttons);

let copyAllButtons = [];

for (let i =0; i < all_buttons.length; i++){
    //displays all the tag names called button and get all the class names 
    //button.classnames
    copyAllButtons.push(all_buttons[i].classList[i])

}

function buttonColorChange(buttonObject){
    if(buttonObject.value === 'red'){
        buttonsRed();
    }
    else if(buttonObject.value === 'green'){
        buttonsGreen();
    }
    else if(buttonObject.value === 'reset'){
        buttonColorReset();
    }
    else if(buttonObject === 'random'){
        randomColors();

    }
}

function buttonsRed(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');

    }
}

function buttonsGreen(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');

    }
}

function buttonColorReset(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
}