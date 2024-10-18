let inputSlider = document.querySelector("[data-lengthSlider]");
let lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

const symbols = '~`!@#$%^&*()_-+={[}]|;:"<,>.?/';

// starting values

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();

//set strength circle to grey


// set password length according to the slider 
function handleSlider() { // handler function password length ko UI pe reflect krata hai   
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

//to set the strength of indicator
function setIndicator(color) {
    //setindicator ka kaam hai ki input parameter color ko set kr deta hai
    indicator.style.backgroundColor = color;

    //shadow-HW
}

// give random number b/w min and max 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRndNumber() {
    return getRndInteger(0, 9);
}

function generateLowercase() {
    return String.fromCharCode(getRndInteger(97, 122));
}
function generateUppercase() {
    return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbol() {
    const rndNumber = getRndInteger(0, symbols.length);
    return symbols.charAt(rndNumber);
}

function calcStrength() { //kon kon se checkbox checked hai ya unchecked hai
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if (uppercaseCheck && uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck && lowercaseCheck.checked) hasLower = true;
    if (numbersCheck && numbersCheck.checked) hasNum = true;
    if (symbolsCheck && symbolsCheck.checked) hasSym = true;

    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if ((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";

    } catch (e) {
        copyMsg.innerText = "Failed";

    }
    //to make copy vala span visible
    copyMsg.classList.add("active");
    //2 second baad hatt jaye
    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
}


//singham functions or event listener functions 
function handleCheckboxChange() {
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked)
            checkCount++;
    });

    //special condition
    if (password.length <= checkCount) {
        password.length = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox) => { //to count the checkbox count
    checkbox.addEventListener('change', handleCheckboxChange);
})



inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value) { //password.length>=0
        copyContent();
    }
})


//shuffling alogrithm ---> Fisher yates method(popular algorithm) array ki form mai password bhej diya
function shufflePassword(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach(el => str += el);
    return str;
}



generateBtn.addEventListener('click', () => {
    //none of the checkbox selected
    if (checkCount <= 0) return;
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
    //lets start the journey of finding new password

    //remove old password
    password = "";


    //lets put the stuff mentioned in checkbox

    // if (uppercaseCheck.checked) {
    //     password += generateUppercase();
    // }
    // if (lowercaseCheck.checked) {
    //     password += generateLowercase();
    // }
    // if (numbersCheck.checked) {
    //     password += generateRndNumber();
    // }
    // if (symbolsCheck.checked) {
    //     password += generateSymbol();
    // }

    let funcArr = [];

    // i have to add null checks (You add null checks for safety.)
    if (uppercaseCheck && uppercaseCheck.checked)
        funcArr.push(generateUppercase);
    if (lowercaseCheck && lowercaseCheck.checked)
        funcArr.push(generateLowercase);
    if (numbersCheck && numbersCheck.checked)
        funcArr.push(generateRndNumber);
    if (symbolsCheck && symbolsCheck.checked)
        funcArr.push(generateSymbol);


    // Make sure there are functions to call (extra code from chatgpt while correcting code)
    if (funcArr.length === 0) {
        console.error('No character types selected for password generation.');
        return;
    }

    //compulsory check addition
    for (let i = 0; i < funcArr.length; i++) {
        password += funcArr[i]();
    }
    console.log("compuslory addition done");


    //remaining addition
    for (let i = 0; i < passwordLength - funcArr.length; i++) {
        let rnd = getRndInteger(0, funcArr.length);
        if (typeof funcArr[rnd] === 'function')  // statement to check whether the calling is function or not
            password += funcArr[rnd]();
    }
    console.log("remaining addition done");

    //shuffle the password
    password = shufflePassword(Array.from(password));
    console.log("shuffling done");


    // show the password in UI
    passwordDisplay.value = password;
    console.log("UI addition done");

    //calculate strength
    calcStrength();

})