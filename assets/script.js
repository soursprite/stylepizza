document.querySelector('#mainOptions').classList.toggle('hidden') //default unhide

//shorthand for getElementById
let getElement = function(el) {
    return document.getElementById(el)
}


/*--------- saucetop -----------*/
const sauceTop = getElement('sauceTop')
const sauceSize = 310; //declared in sauce section

class SauceTopper {
    constructor(size, density, shape = 'none') {
        this.size = size;
        this.density = density;
        //this.color = color;
        this.shape = shape;
        this.gridCount = density * Math.ceil(density * 2/3)
        this.gridSize = Math.floor(sauceSize / density)
    }
    
    get display() {
        return this.display()
    }

    buildGrid() { //creating gridboxes based on density
        let topperShape = ''
        switch (this.shape) {
            case 'basic':
                topperShape = 'basicSauceTopper';
                break;
            case 'magic':
                topperShape = 'magicSauceTopper';
                break;
            case 'green':
                topperShape = 'pestoSauceTopper';
                break;
            default:
                topperShape = 'noSauceTopper';
                break;
        }
        const divGrid = `<div class="sauceTopper ${topperShape}"></div>` //i just have the shapes in css instead
        let totalGrid
        for (let i = 0; i < this.gridCount; i++) {
            console.log(i)
            totalGrid += divGrid
        }
        sauceTop.style.gridTemplateColumns = `repeat(${this.density}, ${this.gridSize}px)`
        sauceTop.style.gridTemplateRows = `repeat(${Math.ceil(this.density * 2/3)}, ${this.gridSize}px)`
        sauceTop.innerHTML = totalGrid
    }

    buildShape() {
        //im too lazy to do this now, ill have in the css file instead
    }

    display() {
        this.buildGrid()
        sauceTop.childNodes.forEach( (x) => (x.innerText = 'x') )
    }
}

const noSauceTopper = new SauceTopper(0, 0, 'none')
const basicSauceTopper = new SauceTopper(5, 10, 'basic')
const magicSauceTopper = new SauceTopper(5, 7, 'magic')
const pestoSauceTopper = new SauceTopper(5, 5, 'pesto')




/* ------------- sauce --------------*/
const sauce = getElement('sauce')
//const sauceSize = 310; //declared in saucetop section

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

const basicSauce = new Sauce (sauceSize,2/3 * 310,'#c70e0e', '2px brown solid', '#881111', '#9e1919')
basicSauce.display(); // display default
basicSauceTopper.display();

const noSauce = new Sauce (0,0,'')
const unicornSauce = new Sauce (310,2/3 * 310,'lightgray', '3px lightgray solid', '#9ea3a5', '#776f6f', '#878388', '#7ea3c5')
const alfredoSauce = new Sauce (310, 2/3 * 310, '#fbfcf5', '2px #e0e0db solid', '#f3f3e0')


const basicSauceOption = getElement('basicSauce')
const noSauceOption = getElement('noSauce')
const alfredoSauceOption = getElement('alfredoSauce')
const unicornSauceOption = getElement('unicornSauce')

basicSauceOption.addEventListener('click',function() {  basicSauce.display()
                                                        basicSauceTopper.display()})

noSauceOption.addEventListener('click',function() { noSauce.display()
                                                    noSauceTopper.display()})

alfredoSauceOption.addEventListener('click',function() {alfredoSauce.display()
                                                        noSauceTopper.display()})

unicornSauceOption.addEventListener('click',function() {unicornSauce.display()
                                                        magicSauceTopper.display()})




/* -------- crust -----------*/

const crust = getElement('crust')
const lightcrust = 'rgb(226, 214, 157)' //crustcolor
const toastycrust = 'rgb(161, 117, 66)'

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

const basicCrust = new Crust(340, 2/3 * 340 + 15, lightcrust)
basicCrust.display();

const noCrust = new Crust(0,0,'')
const panCrust = new Crust(340, 2/3 * 340 + 30, lightcrust)
const bowlCrust = new Crust(340, 2/3 * 340 + 50, lightcrust, 'bowl')

const basicCrustOption = getElement('basicCrust')
const noCrustOption = getElement('noCrust')
const panCrustOption = getElement('panCrust')
const bowlCrustOption = getElement('bowlCrust')


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
    //console.log(this.id)
    currentElement = document.getElementById(this.id)
    let parentParent = currentElement.parentNode.parentNode
    //console.log (parentParent)
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

const crustOptions = getElement('goToCrust')
const sauceOptions = getElement('goToSauce')
const mainOptions1 = getElement('goToOptions1')
const mainOptions2 = getElement('goToOptions2')
const mainOptions3 = getElement('goToOptions3')

crustOptions.addEventListener('click',changeOption)
mainOptions1.addEventListener('click',changeOption)
mainOptions2.addEventListener('click',changeOption)
mainOptions3.addEventListener('click',changeOption)
sauceOptions.addEventListener('click',changeOption)