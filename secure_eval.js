function secureEval(hack_string){
  // 0 risk eval calculator
  const whiteList = ['',' ', 'x', 'y','+','*','/','-'];
  for (let i=0; i<hack_string.length; i++){
    if (!whiteList.includes(hack_string[i])){
      return 'Sorry u can not hack my systems';
    }
  }
  return eval(hack_string);
}

document.getElementById("demo").innerHTML = secureEval('x * y; alert("hacked")');
