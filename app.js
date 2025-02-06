// const str1 = "england"
// const str2 = "landeng"
const str1 = "england"
const str2 = "englend"

const toArr = (str) => {
    return str=str1.split("")
}

firstStr = toArr(str1)
secondStr = toArr(str2)
console.log(firstStr);

const matchArr = []
const misMatchArr = []

for (const [i1, el1] of firstStr.entries()) {
    for (const [i2, el2] of secondStr.entries()) {
        if (i1 === i2) {
            // console.log(`strings have the same length`);
        }
      if (el1 === el2) {
            console.log(`it is the same ${el1}=${el2}; index is: ${i1}&${i2}`);
        }
    }
    

}   
