class DuplicateAndUniqueVals {

    getUniqueValsForNumericArray(numericArray){
        let uniqueVals = {}
        numericArray.filter((item)=>{
            uniqueVals[item] = {}
        })
        return Object.keys(uniqueVals)
    }

    getDuplicateValsForNumericArray(numericArray){
        let duplicateVals = []
        let uniqueVals = {}
        numericArray.filter((item)=>{
            if(uniqueVals[item]){
                duplicateVals.push(item)
            }
            uniqueVals[item] = {}
        })
        return duplicateVals
    }

    getDuplicateCharsInString(inputStr){
        let charArray = inputStr.split('')
        let uniqueChars = {}
        let duplicateChars = []
        charArray.filter((item)=>{
            if(uniqueChars[item]){
                duplicateChars.push(item)
            }
            uniqueChars[item] = {}
        })

        return duplicateChars.join('')
    }

    constructCharCountArrayForStr(inputStr){
        let charArray = inputStr.split('')
        let uniqueChars = {}
        charArray.filter((item)=>{
            if(uniqueChars[item]){
                uniqueChars[item] = uniqueChars[item] + 1
            }else {
                uniqueChars[item] = 1
            }
        })

        for(var prop in uniqueChars){
            if(uniqueChars[prop] === 1){
                delete uniqueChars[prop]
            }
        }

        return uniqueChars;
    }

}

export default new DuplicateAndUniqueVals()