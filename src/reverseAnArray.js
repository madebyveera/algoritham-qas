class ReverseAnArray{

    useArrayMethodForReverse(inputArray) {
        return inputArray.reverse()
    }

    useManualMethodForReverse(inputArray) {
        var revArray = [];
        for(var j=inputArray.length; j>0; j--){
            revArray.push(inputArray[j-1])
        }
        return revArray;
    }

    arrayRevWithoutEffectingSpecChars(inputStr){
        console.log('arrayRevWithoutEffectingSpecChars --== ', inputStr)
        let str = inputStr.toLowerCase().split('')
        var r = str.length - 1
        let l = 0; 
        while (l < r) { 
            if (!/^[a-zA-Z()]+$/.test(str[l])){
                l++; 
            } else if(!/^[a-zA-Z()]+$/.test(str[r])) {
                r--;
            } else { 
                var tmp = str[l]; 
                str[l] = str[r]; 
                str[r] = tmp; 
                l++; 
                r--; 
            } 
        } 
        return str.join('')
    }

    useManualMethodForPalindrome(inputStr){
        let str = inputStr.toLowerCase().split('')
        let len = str.length
        for (var i = 0; i < len/2; i++) {
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }
        return true
    }

}

export default new ReverseAnArray()