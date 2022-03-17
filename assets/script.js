document.querySelector('#mainOptions').classList.toggle('hidden') //default unhide

//shorthand for getElementById
let getElement = function(el) {
    return document.getElementById(el)
}



/* ------------- sauce --------------*/
let sauce = document.getElementById('sauce')

class Sauce {
    constructor(width, height, sauceColor, border = 'none', gradientColor = sauceColor, gradientColor2 = sauceColor, gradientColor3 = gradientColor, gradientColor4 = sauceColor) { //num num string string string
        this.height = height;
        this.width = width;
        this.sauceColor = sauceColor;
        this.border = border;
        this.gradientColor = gradientColor;
        this.gradientColor2 = gradientColor2;
        this.gradientColor3 = gradientColor3;
        this.gradientColor4 = gradientColor4;

    }

    get display() {
        return this.display()
    }

    display() {
        sauce.style = `background: radial-gradient(ellipse at center, ${this.sauceColor} 0%, ${this.gradientColor}, ${this.gradientColor2}, ${this.gradientColor3}, ${this.gradientColor4} 80%);`
        //sauce.style.sauceColor = this.sauceColor;
        sauce.style.width = `${this.width}px`;
        sauce.style.height = `${this.height}px`;
        sauce.style.zIndex = '200';
        sauce.style.borderRadius = '50%';
        sauce.style.border = `${this.border}`
    }
}

let basicSauce = new Sauce (310,2/3 * 310,'#c70e0e', '2px brown solid', '#881111', '#9e1919')
basicSauce.display(); // display default

let noSauce = new Sauce (0,0,'')
let unicornSauce = new Sauce (310,2/3 * 310,'lightgray', '3px lightgray solid', '#9ea3a5', '#776f6f', '#878388', '#7ea3c5')
let alfredoSauce = new Sauce (310, 2/3 * 310, '#fbfcf5', '2px #e0e0db solid', '#f3f3e0')


let basicSauceOption = getElement('basicSauce')
let noSauceOption = getElement('noSauce')
let alfredoSauceOption = getElement('alfredoSauce')
let unicornSauceOption = getElement('unicornSauce')

basicSauceOption.addEventListener('click',function() {basicSauce.display()})
noSauceOption.addEventListener('click',function() {noSauce.display()})
alfredoSauceOption.addEventListener('click',function() {alfredoSauce.display()})
unicornSauceOption.addEventListener('click',function() {unicornSauce.display()})


/* -------- crust -----------*/

let crust = document.getElementById('crust')
let lightcrust = 'rgb(226, 214, 157)' //crustcolor
let toastycrust = 'rgb(161, 117, 66)'

class Crust {
    constructor(width, height, background, special) { //num num string string
        this.height = height
        this.width = width
        this.oldHeight = 2/3 * this.width;
        this.background = background;
        this.special = special;
    }

    get display() {
        return this.display()
    }

    get bowlCrust() {
        return this.bowlCrust()
    }

    get panCrust() {
        return this.panCrust()
    }

    panCrust() {
        crust.style.borderRadius = `50% / ${this.oldHeight / 2}px`;
    }


    bowlCrust() {
        crust.style.borderRadius = `50% / ${this.oldHeight / 2}px ${this.oldHeight / 2}px 50% 50%`;
    }

    display() {
        crust.style = `background: radial-gradient(ellipse closest-side at ${this.width / 2}px ${this.oldHeight / 2}px, ${lightcrust} 90%, ${toastycrust} 100%);`
        crust.style.borderRadius = `50% / ${this.oldHeight / 2}px`;
        crust.style.top = `calc(50% - ${this.oldHeight / 2}px)`
        crust.style.bottom = 'none'
        crust.style.left = `calc(50% - ${this.width / 2}px)`
        crust.style.right = 'none'
        crust.style.margin = '0'
        crust.style.width = `${this.width}px`;
        crust.style.height = `${this.height}px`;
    }
}

let basicCrust = new Crust(340, 2/3 * 340 + 15, lightcrust)
basicCrust.display();

let noCrust = new Crust(0,0,'')
let panCrust = new Crust(340, 2/3 * 340 + 30, lightcrust)
let bowlCrust = new Crust(340, 2/3 * 340 + 50, lightcrust, 'bowl')

let basicCrustOption = getElement('basicCrust')
let noCrustOption = getElement('noCrust')
let panCrustOption = getElement('panCrust')
let bowlCrustOption = getElement('bowlCrust')


basicCrustOption.addEventListener('click',function() {basicCrust.display()})
noCrustOption.addEventListener('click',function() {noCrust.display()})
panCrustOption.addEventListener('click',function() {panCrust.display()
                                                    panCrust.panCrust()})

bowlCrustOption.addEventListener('click',function() {bowlCrust.display()
                                                    bowlCrust.bowlCrust()})

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
        case 'goToOptions1' :
        case 'goToOptions2' :
        case 'goToOptions3' :
            flipOn = 'mainOptions' ;
            break;
    }
    parentParent.classList.toggle('hidden') //hide current element
    document.getElementById(flipOn).classList.toggle('hidden') //unhide new element
}

let crustOptions = getElement('goToCrust')
let sauceOptions = getElement('goToSauce')
let mainOptions1 = getElement('goToOptions1')
let mainOptions2 = getElement('goToOptions2')
let mainOptions3 = getElement('goToOptions3')

crustOptions.addEventListener('click',changeOption)
mainOptions1.addEventListener('click',changeOption)
mainOptions2.addEventListener('click',changeOption)
mainOptions3.addEventListener('click',changeOption)
sauceOptions.addEventListener('click',changeOption)