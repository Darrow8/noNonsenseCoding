//* video link! https://www.youtube.com/watch?v=A3ENY4Qae0A

// * Commenting 

//single line comment

/* 
multi 
lines
*/

// * Variables

// console.log(name1) //! Would error

let name1 = 'John';
var name2 = 'John';
const name3 = 'John';

// name3 = 'Mary'; //! Would error

/* 
    Types:
        Strings,
        Numbers,
        Null,
        Undefined,
        Arrays,
        Objects,
        Booleans

*/

// * If Statements

// A > B
// A >= B
// A == B
// A === B
// A != B
let A;
let B;

if(A > B){
    //TODO: Code
}

// let isTrue = true;
// if(isTrue){

// }

// * Arrays & Objects

let arr = [1,2,3]; 
// arr[0] // corresponds to 1

let obj = {
    name: 'Object',
    type: 'Object'
}


// * For & While Loops

for(let i = 0; i< arr.length; i++){
    console.log(i) // 0, 1, 2
}

let isTrue = true;
while(isTrue){

}

// * Loop over the items in a container
for (let num of arr) {
    console.log(num); // 0, 1, 2 on new lines
}

for (let key in obj) {
    console.log(key, obj[key]); // 'name' 'Object', 'type' 'Object'
}

// * Standard & Arrow Functions

function getMilk(){
    return 'got milk'
}

function getMilk2(jugs){
    return `got ${jugs} of milk`
}

// getMilk2(5); // got 5 jugs of milk

let arrowFunc = () =>{

}


let diff = {
    name: 'difference between these',
    arrow: () =>{
        console.log(this.name) // return ''
    },
    standard: function std(){
        console.log(this.name) // return difference between these
    }
}



// * Classes

class Programmer{
    constructor(name, languages){
        this.name = name;
        this.languages = languages;
    }

    writeScript(languageUsed){
        let canCode = false;
        for( let i =0; i < this.languages.length; i++){
            if(languageUsed == this.languages[i]){
                canCode = true;
            }
        }

        if( canCode){
            console.log('I can do this')
        }else{
            console.log('Cannot do this')
        }
    }

}

let person = new Programmer('John', ['javascript'])
person.writeScript('javascript');

