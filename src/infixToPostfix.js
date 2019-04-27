import stackDataStruct from "./stackDataStruct";
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

  infixToPostfix(str) {
    let result = "";
    let stack = new stackDataStruct();
    let exp = str.split("");
    exp.filter(item => {
      if (item == "(") {
        stack.push(item);
      } else if (item == ")") {
        while (!stack.isEmpty() && stack.peek() != "(") {
          result = result + stack.pop();
        }
        if (!stack.isEmpty() && stack.peek() != "(") {
          return "Invalid Expression";
        } else {
          stack.pop();
        }
      } else if (/^[a-zA-Z()]+$/.test(item)) {
        result = result + item;
      } else {
        while (!stack.isEmpty() && this.prec(item) <= this.prec(stack.peek())) {
          const temp = stack.pop();
          result = result + temp;
        }
        stack.push(item);
      }
    });
    while (!stack.isEmpty()) {
      result = result + stack.pop();
    }
    return result;
  }

  run(str) {
    console.log("---->> InfixToPostfix::run(.) <<----");
    const result = this.infixToPostfix(str);
    console.log("---->> ", result);
  }
}

export default new InfixToPostfix();
