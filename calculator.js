const PI = 3.14;

function Calculatrice(a, b, op) {

    switch (op) {
  
      case '+':
        return a + b
        break;
      case '-':
        return a - b
        break;
      case '*':
        return a * b
        break;
      case '/':
        return a / b
        break;
    default:
        return "Invaild Operation"
    }
  
  }
  console.log(Calculatrice(5, 5, '/'));