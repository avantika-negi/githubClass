function makeSizer(size) {
    return function (testing) {
        testing.target.style.fontSize = `${size}px`;
        document.body.style.background = "black";
        setTimeout(()=> document.body.style.background = "", 1000 );
    };
}

function reset() {
    return function () {
        document.getElementById("size-12").style.fontSize = "2px";
        document.getElementById("size-14").style.fontSize = "4px";
        document.getElementById("size-16").style.fontSize = "6px";
    };
}

const defaultSize = reset();
const size12 = makeSizer(12);
const size14 = makeSizer(24);
const size16 = makeSizer(36);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
document.getElementById("size-default").onclick = defaultSize;

let elem = document.getElementById('elem');
elem.style.background = 'blue'

let inputs = table.getElementsByTagName('Input');

// for (let input of inputs) {
//     alert(input.value + ":" + input.checked) 
// }

let newDiv = document.getElementById('newDiv');
newDiv.style.background = 'red';

function sum(x,y) {
    console.log(x+y);
    return x + y;
};

const newButton = sum(1,34)
document.getElementById('normalButton').onclick = newButton;