//Easy Challenge

const newArray = [1, 5, 13, 7, 9];

console.log(Math.max(...newArray));

//Medium Challenge

let average = (array) => array.reduce((a, b) => a + b) / array.length;

console.log(average([25, 30, 15, 50]));


//Hard Challenge

let pageBody = document.querySelector('.body1');

let redButton = document.querySelector('.redButton');
let whiteButton = document.querySelector('.whiteButton');


redButton.addEventListener('click', () => {
    pageBody.classList.add('bg-red');
    pageBody.classList.remove('bg-white');
});

whiteButton.addEventListener('click',() => {
    pageBody.classList.add('bg-white');
    pageBody.classList.remove('bg-red');

});


//Very Hard Challenge

function singleChar(str) {
    console.log(str);

    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))) {
            console.log(str.charAt(i));
            break;
        }
        
    }
}

singleChar("the quick brown fox jumps over the calm kitten quietly");