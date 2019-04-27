class StackStruct {
    
    constructor(){
        this.stack = []
    }

    push(item){
        this.stack.push(item)
    }

    pop(){
        let lifoStr = this.stack[this.stack.length-1]
        this.stack = this.stack.slice(0, this.stack.length-1)
        return lifoStr
    }

    peek(){
        return this.stack[this.stack.length-1]
    }

    isEmpty(){
        return this.stack.length === 0
    }

}
export default StackStruct;
