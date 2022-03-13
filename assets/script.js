document.querySelector('#mainOptions').classList.toggle('hidden') //default unhide

let crust = document.getElementById('crust')

class Crust {
    constructor(width, height, background) { //num num string
        this.height = height;
        this.width = width;
        this.background = background;
    }

    get display() {
        return this.display()
    }

    display() {
        crust.style.background = this.background;
        crust.style.width = `${this.width}px`;
        crust.style.height = `${this.height}px`;
    }
}

let basicCrust = new Crust(340, 340, 'tan')
basicCrust.display();

let noCrust = new Crust(0,0,'')
//noCrust.display()
/*

function basicCrust() {
    let crust = document.getElementById('crust')
    const pSize = 340
    const pHeight = 2/3 * pSize

    crust.style.background = "tan";
    crust.style.width = `${pSize}px`;
    crust.style.height = `${pSize}px`;
}
*/

//switch to the menu that is selected- grab html id from the triggering onclick
function changeOption(evt) {
    console.log(this.id)
    currentElement = document.getElementById(this.id)
    let parentParent = currentElement.parentNode.parentNode
    console.log (parentParent)
    let flipOn = ''
    switch (this.id) {
        case 'goToCrust' :
            flipOn = 'crustOptions';
            break;
        case 'goToSauce' :
            flipOn = 'sauceOptions';
            break;
        case 'goToToppings' :
            flipOn = 'toppingsOptions';
            break;
        case 'goToOptions' :
            flipOn = 'mainOptions' ;
            break;
    }
    parentParent.classList.toggle('hidden') //hide current element
    document.getElementById(flipOn).classList.toggle('hidden') //unhide new element
}

let crustOptions = document.getElementById('goToCrust')
let mainOptions = document.getElementById('goToOptions')


crustOptions.addEventListener('click',changeOption)
mainOptions.addEventListener('click',changeOption)