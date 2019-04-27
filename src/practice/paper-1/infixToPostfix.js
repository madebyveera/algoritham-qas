import StackStruct from './StackStruct'
class InfixToPostfix {
  prec(ch) {
    if (ch === "+" || ch === "-") {
      return 1;
    } else if (ch === "*" || ch === "/") {
      return 2;
    } else if (ch === "^") {
      return 3;
    }
    return -1;
  }

  getInfixToPostfix(str){
      const exp = str.split('')
      const stack = new StackStruct()
      let result = ''
      exp.filter((item, index) => {
          if(item === "("){
              stack.push(item)
          }else if(item === ")"){
              while(!stack.isEmpty() && stack.peek()!=="("){
                  result = result + stack.pop()
              }
              stack.pop()
          }else if(/^[a-zA-Z]+$/.test(item)){
              result = result + item
          }else {
              while(!stack.isEmpty() && this.prec(item)<this.prec(stack.peek())){
                  result = result + stack.pop()
              }
              stack.push(item)
          }
      })
      while(!stack.isEmpty()){
          result = result + stack.pop()
      }
      return result
  }
}

export default new InfixToPostfix();
