let maxNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function processArray(element) {
    if (element % 2 === 0) {

        return Math.pow(element, 2)
    }

    if (element % 2 !== 0 ) {

        return Math.pow(element, 3)
    }
        
}

const maxStrings = ["Maxwell", "Linda", 
                    "Fiona", "Julius", "George",
                    "Alex", "Luke","Phil","Princess", "Jay"]

function formatArrayStrings(strings , numbers) {
   
    return strings.map((str, index) => {

        if (numbers[index] % 2 === 0) {
          return str.toUpperCase();
        } 
        
        else {
          return str.toLowerCase();
        }
     
    });
}

const maxNewArray = formatArrayStrings(maxStrings, maxNumbers);

const newArray = maxNumbers.map(processArray);

console.log(newArray);

console.log(maxNewArray);