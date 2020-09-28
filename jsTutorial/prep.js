// * Commenting 

// Single line comment

/*
 hello multi line
*/

// * Variables


/* 
    Variable Types:
        Strings,
        Numbers,
        Booleans,
        Undefined,
        Objects,
        Null,
        Functions,
*/

// console.log(name1) // ! Cannot do with lets

// format
let name1 = 'John'
var name2 = 'John'
const name3 = 'John'



// * If Statements

/*
    Statements for If Statements
        A > B  and A < B : if one is greater than the other
        A >= B  and A <= B : if one is greater than or equal than the other
        A == B : if they are equal 
        A !== B : if they are not strictly equal (same type)
        A === B : if they are strictly equal (same type)
        A != B : if they are not equal

*/

let A = 1;
let B = 0;
let C = '1';

// format
if( A > B){
    // TODO: Do whatever
}

// returns true
if( A == C){
    // TODO: Do whatever
}

// returns false
if( A === C){
    // TODO: Do whatever
}

// * Objects and Arrays

let students = ['John', 'Mary', 'Jack'] // goes from 0 to 2, NOT 1 to 3

console.log(students[0]) // prints John

let teacher = {
    name: 'Mr. C',
    test: 'Hard',
    students: students,
}

console.log(teacher['name']) // prints Mr. C
console.log(teacher.name) // also prints Mr. C
console.log(teacher.students[0]) // prints John

// * For & While Loops

let arr = [1,2,3]

for( let i = 0; i < arr.length; i++){
    console.log(i); // prints 0, 1, 2
}

arr.forEach(val => {
    console.log(val); // prints 1, 2, 3
});

// * Standard & Arrow Functions

function eatHotdog(){
    //TODO: Eat Hotdog
    return 'eaten';
}

console.log(eatHotdog()); // prints 'eaten'


func = (numberOfH) => {
    return `ate ${numberOfH} hotdogs`
}

console.log(func(10))




// * Classes

class Programmer {
    constructor(name, age, languages){
        this.name = name;
        this.age = age;
        this.languages = languages;
    }

    writeScript(language){
        let canCode = false;
        this.languages.forEach(lan =>{
            if(language == lan){
                // programmer can code!
                canCode = true;
            }
        })

        if(canCode){
            console.log('I did it!')
        }else{
            console.log(`Sorry, no can do. I don't know ${language}`)
        }
    }
}


