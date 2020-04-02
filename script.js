"use strict";

let display = document.getElementById("display");
let displayWidth = display.scrollWidth;

let minValue = 1;
let maxValue = 99;

let countItems = null;
let elements = [];

let sortInterval = 100;

let i = 0;
let j = 0;
let l1 = 0;
let l2 = 0;
// nums = getfillArrayRandomNums(10, 0, 100);

// createElements();


function getfillArrayRandomNums(arrLength, min, max) {
    let arr = [];
    for (let i = 0; i < arrLength; i++) {
        arr.push(getRandomInt(min, max));
    }
    return arr;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function createElements() {
// let element = document.createElement("div");
// element.className = "display_item";
// element.innerHTML = 5555;
// display.append(element);    
// elements = [];
// }

function buttonStartSort_onclick() {
    if (document.getElementById("radio_bubbleSort").checked) {
        
        let i = 0;
        let j = 0;
        l1 = elements.length;
        l2 = elements.length;
        setTimeout(sortElementsByBubbleSort, sortInterval);
    }
}
function showElements_onclick() {
    showElementsByDisplay();
    document.getElementById("buttonStartSort").disabled = false;
}

function showElementsByDisplay() {
    countItems = document.getElementById("number_countItems").value;
    clearArrayElements();
    clearDisplay();
    createElements();
    fillDisplay();
}

function clearArrayElements() {
    elements.length = 0;
}

function clearDisplay() {
    display.innerHTML = "";
}

function createElements() {
    for (let i = 0; i < countItems; i++) {
        elements.push(createItem());
    }
}

function createItem() {
    let itm = document.createElement("div");
    itm.className = "display_item";
    itm.id = getRandomInt(minValue, maxValue);
    itm.innerHTML = itm.id;
    itm.style.width = itm.id + "%";
    return itm;
}

function fillDisplay() {
    for (let i = 0; i < elements.length; i++) {
        display.append(elements[i]);
        
        elements[i].className = "display_item";
    }
}

function sortElementsByBubbleSort() {
    // for (i = 0; i < l1 - 1; i += 1) {
    //     for (j = 0; j < l2 - 1; j += 1) {
    //         //console.log("[j] =" + elements[j].id + "; [j+1] =" + elements[j + 1].id);
    //         if (+elements[j].id > +elements[j + 1].id) {
    //             [elements[j], elements[j + 1]] = [elements[j + 1], elements[j]];
    //             // swap = elements[j];
    //             // elements[j] = elements[j + 1];
    //             // elements[j + 1] = swap;
    //         }
    //     }
    //     l2--;
    // }

    if(i < l1-1) {
        if(j < l2-1) {
            
            
            
            if (+elements[j].id > +elements[j + 1].id) {
                [elements[j], elements[j + 1]] = [elements[j + 1], elements[j]];
                // elements[j].className += " involvedInSwap";
                // elements[j+1].className += " involvedInSwap";
            }
            j++;
        }
        else {
            i++;
            j = 0;
            l2-=1;
        }
    }
    else {
        clearTimeout(sortElementsByBubbleSort);
        console.log("Bubble sort complete!");
        return;
    }
    clearDisplay();
    fillDisplay();
    setTimeout(sortElementsByBubbleSort, sortInterval);
}

function ViewConsoleElements() {
    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i].id);
    }
    console.log("-------------------------------------");
}