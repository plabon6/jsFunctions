// Weight Machine Function

function fixWeightMachine(oldArray){  
    if(Array.isArray(oldArray)==true){
        const blankArr = [];
        for (const a of oldArray) {
            if (a>0){
                blankArr.push(a); 
            }
        }
        console.log("Weights Found "+blankArr);
    }
    else{
        console.log("Invalid Input");
    }
}

fixWeightMachine([100,NaN,-5,30,undefined]);

// Vowel Counting Function

function countVowels(c){
    if (isNaN(c)){
    const vowels = "aeiouAEIOU";
    let  totalVowels = 0;
    for (const a of c) {
        if(vowels.includes(a)){
            totalVowels++;
            }
        }
        console.log("Total Vowel Count is "+totalVowels);
    }
    else{
        console.log("Invalid Input");
        
    }
}

countVowels("Sky");


// Result Function

function evaluateResult(s) {
    const result = [];
    if(Array.isArray(s)){

        for (const r of s) {
            if(isNaN(r)){
                result.push("Invalid")
            }
            else{
                if (r == null) {
                    result.push("Invalid")
                }
                else if(r<50){
                    result.push("F");
                }
                else if(r>=50 && r<=59){
                    result.push("D");
                }
                else if(r>=60 && r<=69){
                    result.push("C");
                }
                else if(r>=70 && r<=79){
                    result.push("B");
                }
                else if(r>=80 && r<=89){
                    result.push("A");
                }
                else{
                    result.push("A+")
                }
            }
            
        }
        console.log(result);
    }

    else{
        console.log("Invalid Input");  
    }

}

const score = [45,55,67,77,82,95,"a",null];

evaluateResult(score);


// Perfect Password Function

function createPerfectPassword(p) {
    
const idName = p.name

if(typeof(p)=="string"){
    console.log("Invalid Input");
}

else{

    if(p.year.toString().length<4){
        console.log("Invalid Input");
    }

    else{
        
        console.log(idName.slice(0,1).toUpperCase()+idName.slice(1,idName.length)+identity.year);
    }
}
}


const identity = {
    name: "Sohel",
    year: 1986
}

createPerfectPassword(identity);


const incomeExpense = [3000,2000,1500], 5000

console.log(incomeExpense);
