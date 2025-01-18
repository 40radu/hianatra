export const testArray = Array.from({ length: 24 }, (_, id) => id + 1);
const itemPerSection = 6;
let itemsArray : Array<number> = []
const sectionArray : Array<Array<number>> = []

for ( let i = 0 ; i < testArray.length ; i++) {
    if(itemsArray.length <= 6) {
        itemsArray.push(testArray[i])
    }
    sectionArray.push(...sectionArray)
    itemsArray = []

}

console.log(sectionArray);