import StackStruct from './StackStruct'
class PostfixToInfix {

    getPostfixToInfix(str){
        const exp = str.split('')
        const stack = new StackStruct();

        exp.filter((item)=>{
            if(/^[a-zA-Z]+$/.test(item)){
                stack.push(item+" ")
            }else {
                const opr1 = stack.peek();
                stack.pop()
                const opr2 = stack.peek();
                stack.pop();
                stack.push('('+opr2+item+opr1+')')
            }
        })

        return stack.peek()
    }

}

export default new PostfixToInfix()