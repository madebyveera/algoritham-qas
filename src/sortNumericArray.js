class SortNumericArray {
    
    useArrayMethodSort(inputArray){
        inputArray = inputArray.sort((a,b)=>a-b)
        return inputArray
    }

    useManualMethodSort(inputArray){
        inputArray.filter((item, index)=>{
            let target = item;
            for(var j=index-1;
                    j>=0 && inputArray[j]>target;
                    j--){
                        inputArray[j+1]=inputArray[j]
                    }
            inputArray[j+1] = target
        })
        return inputArray
    }

}

export default new SortNumericArray()