class StackDataStructure {
    
    constructor(){
        this.stackArray = []
    }

    push(item){
        this.stackArray.push(item)
    }

    pop(){
        let returnVal = this.stackArray[this.stackArray.length-1]
        this.stackArray = this.stackArray.slice(0, (this.stackArray.length-1))
        console.log('---- stack after pop ', this.stackArray)
        return returnVal
    }

    peek(){
        return this.stackArray[this.stackArray.length-1]
    }

    isEmpty(){
        return this.stackArray.length === 0
    }

    print(){
        console.log(this.stackArray)
    }
}

export default StackDataStructure