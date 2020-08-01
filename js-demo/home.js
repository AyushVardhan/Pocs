const containers = document.getElementsByClassName('container');
// containers[2].classList.add('d-none');
console.log(containers);

const values = ['a','b','c'];

console.log(values.slice(0,2));
console.log(values.slice());
console.log(values.splice(1,0,'Hello'));
console.log(values);
console.log(values.splice(2,1,'World'));
console.log(values);

console.log(typeof values);
console.log(Array.isArray(values));

changePercentOff(32);

const button = document.getElementById('see-review');
button.addEventListener('click', function(){
    // console.log('click');
    const review = document.getElementById('review');
    if(review.classList.contains('d-none')){
        review.classList.remove('d-none');
        button.textContent = "Close Review";
    }else{
        review.classList.add('d-none');
        button.textContent = "See Review";
    }
})

let myFunction = function(first, last){
    console.log(`My message to ${first} ${last}`);
}

myFunction("Ayush", "Vardhan");

// let person = {
//     firstName : undefined,
//     lastName : "Vardhan"
// }

// showMessage(person.firstName);

// const header = document.getElementById('message');
// header.style.color ='red';