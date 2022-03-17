let x = 5;
let y = 454545454545454;
// as u can see this example how u contain case and close any possible if ur function
// will use eval small like this and can covered so u can use this more secure than //alert
function secureEval(hack_string){
  // 0 risk eval calculator
  const hackerMsg = 'Sorry u can not hack my systems';
  const whiteList = ['',' ', 'x', 'y','+','*','/','-'];
  const operators = ['+', '*', '/', '-'];
  let x_length = 0;
  let y_length = 0;
  let op_length = 0;
  let space_len = 0;
  for (let i=0; i<hack_string.length; i++){  
    if (hack_string[i] === 'x'){
       x_length += 1;
    }
    if (hack_string[i] === 'y'){
       y_length += 1;
    }
    if (hack_string[i] == ' '){    
       space_len += 1;
    }
    if (operators.includes(hack_string[i])){    
       op_length += 1;
    }
    
    if (x_length > 1 || y_length > 1 || op_length > 1 || space_len > 2 || !whiteList.includes(hack_string[i])){
      return hackerMsg;
      break;
    }
  }
  return eval(hack_string);
}

document.getElementById("demo").innerHTML = secureEval('x / y');
