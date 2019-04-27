import StackStruct from './stackDataStruct'
class PostfixToInfix {

    postfixToInfix(str) {
        const exp = str.split('')
        const stack = new StackStruct();
        exp.filter((item)=>{
            if(/^[a-zA-Z]+$/.test(item)){
                stack.push(item + "")
            }else {
                const op1 = stack.peek();
                stack.pop();
                const op2 = stack.peek(); 
                stack.pop();
                stack.push("(" + op2 + item + op1 + ")"); 
            }
        })
        return stack.peek(); 
    }

    run(str){
        console.log("---->> postfixToInfix::run(.) <<----");
        const result = this.postfixToInfix(str);
        console.log("---->> ", result);
    }

}

export default new PostfixToInfix()