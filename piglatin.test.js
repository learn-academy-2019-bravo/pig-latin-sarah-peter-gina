// var teststring = "this quail is chart bart cart charleaston"

// var wordArray = teststring.split(" ")

// console.log(splitString);
// console.log(splitWord);
//tests to make sure test string is divided into an array
var teststring = " school heart this quail is chart bart cart having charleaston heart psimon dhggul fgfgfol squeal"
const piglatin = () => {
    var str = document.getElementById('text-to-change').value
    var wordArray = str.split(" ")
    var vowels = ["a", "e", "i", "o", "u"]
    var newArr = []
// console.log(wordArray)
    for (let i=0; i<wordArray.length; i++) {
        // var letterArray = wordArray[i].split("")
        // console.log(letterArray)
        if (wordArray[i].indexOf("a") === 0 || wordArray[i].indexOf("e") === 0 || wordArray[i].indexOf("i") === 0 || wordArray[i].indexOf("o") === 0 || wordArray[i].indexOf("u") === 0) {
            newArr.push(wordArray[i].concat("way"));
        } else if (wordArray[i].indexOf("q") === 0 && wordArray[i].indexOf("u") === 1) {
            var newQ = wordArray[i].slice(2)
            newArr.push(newQ.concat("quay"))
        } else if (wordArray[i].indexOf("a") === 1 || wordArray[i].indexOf("e") === 1 || wordArray[i].indexOf("i") === 1|| wordArray[i].indexOf("o") === 1 || wordArray[i].indexOf("u") === 1) {
            var firstLtrs = wordArray[i].slice(0, 1)
                    // console.log(slicedSearch);
                    var lastLtrs = wordArray[i].slice(1)
                    newArr.push(lastLtrs + firstLtrs + "ay")
        } else if (wordArray[i].indexOf("a") === 2 || wordArray[i].indexOf("e") === 2 || wordArray[i].indexOf("i") === 2|| wordArray[i].indexOf("o") === 2 || wordArray[i].indexOf("u") === 2) {
            var firstLtrs = wordArray[i].slice(0, 2)
                    // console.log(slicedSearch);
                    var lastLtrs = wordArray[i].slice(2)
                    newArr.push(lastLtrs + firstLtrs + "ay")
        } else if (wordArray[i].indexOf("a") === 3 || wordArray[i].indexOf("e") === 3 || wordArray[i].indexOf("i") === 3|| wordArray[i].indexOf("o") === 3 || wordArray[i].indexOf("u") === 3) {
            var firstLtrs = wordArray[i].slice(0, 3)
                    // console.log(slicedSearch);
                    var lastLtrs = wordArray[i].slice(3)
                    newArr.push(lastLtrs + firstLtrs + "ay")
        } else if (wordArray[i].indexOf("a") === 4 || wordArray[i].indexOf("e") === 4 || wordArray[i].indexOf("i") === 4|| wordArray[i].indexOf("o") === 4 || wordArray[i].indexOf("u") === 4) {
            var firstLtrs = wordArray[i].slice(0, 4)
                    // console.log(slicedSearch);
                    var lastLtrs = wordArray[i].slice(4)
                    newArr.push(lastLtrs + firstLtrs + "ay")
        } else if (wordArray[i].indexOf("a") === 5 || wordArray[i].indexOf("e") === 5 || wordArray[i].indexOf("i") === 5|| wordArray[i].indexOf("o") === 5 || wordArray[i].indexOf("u") === 5) {
            var firstLtrs = wordArray[i].slice(0, 5)
                    // console.log(slicedSearch);
                    var lastLtrs = wordArray[i].slice(5)
                    newArr.push(lastLtrs + firstLtrs + "ay")
        }
            // for(let i=0; i<wordArray[i].length; i++)

        // else if
            // for (let i=0; i<wordArray.length; i++) {
            //  if (wordArray[i].charAt(2) === 'a')
            //         var num = wordArray.indexOf()
            //         var firstLtrs = wordArray[i].slice(0, num)
            //         // console.log(slicedSearch);
            //         var lastLtrs = wordArray[i].slice(num)
            //         newArr.push(lastLtrs + firstLtrs +"ay")
                // }
    } return newArr.join(' ')
    document.getElementById('outputForpigLatin').innerHTML = newArr
}

console.log(piglatin(teststring));




// console.log(piglatin(teststring));
// will only go up to 5th consonant
// qu needs to be edited to work. "look for squeal"



// if (wordArray[i].charAt(i) === 'a' || wordArray[i].charAt(i) === 'e' || wordArray[i].charAt(i) === 'i' || wordArray[i].charAt(i) === 'o' || wordArray[i].charAt(i) === 'u')
