//Start get & parse all input value calculation.
function getIdValue(id){
  const getId = document.getElementById(id);
  const parseIdValue = parseFloat(getId.value);
  return parseIdValue;
};
//End get & parse all input value calculation.


//Start decimal calculation function.
function twodecimal (calculate){
  const fixed = calculate.toFixed(2);
  const parse = parseFloat(fixed);
  return parse ;
}
//End decimal calculation function.


//Start main assignment calculation.
document.getElementById('triangle-btn').addEventListener('click', function(){
    const parseFirstTriangleInputValue = getIdValue('triangle-field-1');
    if(isNaN(parseFirstTriangleInputValue)){
        alert('enter a number in input filed');
        return;
    }
    else if(parseFirstTriangleInputValue < 0){
      alert('enter a positive value');
      return;
    }
    
    const parseSecondTriangleInputValue = getIdValue('triangle-field-2');
    if(isNaN(parseSecondTriangleInputValue)){
        alert('enter a number in input filed');
        return;
    }
    else if(parseSecondTriangleInputValue < 0){
      alert('enter a positive value');
      return;
    }

    const multiply = 0.5 * parseFirstTriangleInputValue * parseSecondTriangleInputValue  ;
    const result = twodecimal(multiply);
    document.getElementById('triangle').innerText = result + 'cm';

    document.getElementById('tri1').style.display = 'block';
    document.getElementById('tri2').style.display = 'block';
    
    document.getElementById('triangle-field-1').value = '';
    document.getElementById('triangle-field-2').value = '';
});




document.getElementById('rectangle-btn').addEventListener('click',function(){
  const parseFirstRectangleInputValue = getIdValue('rectangle-field-1');
  if(isNaN(parseFirstRectangleInputValue)){
    alert('enter a number in input filed');
    return;
  }
  else if(parseFirstRectangleInputValue < 0){
    alert('enter a positive value');
    return;
  }

  const parseSecondRectangleInputValue = getIdValue('rectangle-field-2');
  if(isNaN(parseSecondRectangleInputValue)){
    alert('enter a number in input filed');
    return;
  }
  else if(parseSecondRectangleInputValue < 0){
    alert('enter a positive value');
    return;
  }

  const multiply = parseFirstRectangleInputValue * parseSecondRectangleInputValue ;
  const result = twodecimal(multiply);
  document.getElementById('rectangle').innerText = result + 'cm';

  document.getElementById('rec-1').style.display = 'block';
  document.getElementById('rec-2').style.display = 'block';

  document.getElementById('rectangle-field-1').value = '';
  document.getElementById('rectangle-field-2').value = '';
});




document.getElementById('parallelogram-btn').addEventListener('click', function(){
  const parseFirstParallelogramInputValue = getIdValue('parallelogram-field-1');
  if(isNaN(parseFirstParallelogramInputValue)){
    alert('enter a number in input filed');
    return;
  }
  else if(parseFirstParallelogramInputValue < 0){
    alert('enter a positive value');
    return;
  }

  const parseSecondParallelogramInputValue = getIdValue('parallelogram-field-2');
  if(isNaN(parseSecondParallelogramInputValue)){
    alert('enter a number in input filed');
    return;
  }
  else if(parseSecondParallelogramInputValue < 0){
    alert('enter a positive value');
    return;
  }

  const multiply = parseFirstParallelogramInputValue * parseSecondParallelogramInputValue;
  const result = twodecimal(multiply);
  document.getElementById('parallelogram').innerText = result + 'cm';

  document.getElementById('para-1').style.display = 'block';
  document.getElementById('para-2').style.display = 'block';

  document.getElementById('parallelogram-field-1').value = '';
  document.getElementById('parallelogram-field-2').value = '';
});




document.getElementById('rhombus-btn').addEventListener('click',function(){
    const parseFirstRhombusInputValue = getIdValue('rhombus-field-1');
    if(isNaN(parseFirstRhombusInputValue)){
      alert('enter a number in input filed');
      return;
    }
    else if(parseFirstRhombusInputValue < 0){
      alert('enter a positive value');
      return;
    }
    
    const parseSecondRhombusInputValue = getIdValue('rhombus-field-2');
    if(isNaN(parseSecondRhombusInputValue)){
      alert('enter a number in input filed');
      return;
    }
    else if(parseSecondRhombusInputValue < 0){
      alert('enter a positive value');
      return;
    }

    const multiply = 0.5 * parseFirstRhombusInputValue * parseSecondRhombusInputValue;
    const result = twodecimal(multiply);
    document.getElementById('rhombus').innerText = result + 'cm';

    document.getElementById('rho-1').style.display = 'block';
    document.getElementById('rho-2').style.display = 'block';

    document.getElementById('rhombus-field-1').value = '';
    document.getElementById('rhombus-field-2').value = '';
});




document.getElementById('pentagon-btn').addEventListener('click',function(){
    const parseFirstPentagonInputValue = getIdValue('pentagon-field-1');
    if(isNaN(parseFirstPentagonInputValue)){
      alert('enter a number in input filed');
      return;
    }
    else if(parseFirstPentagonInputValue < 0){
      alert('enter a positive value');
      return;
    }

    const parseSecondPentagonInputValue = getIdValue('pentagon-field-2');
    if(isNaN(parseSecondPentagonInputValue)){
      alert('enter a number in input filed');
      return;
    }
    else if(parseSecondPentagonInputValue < 0){
      alert('enter a positive value');
      return;
    }

    const multiply = 0.5 * parseFirstPentagonInputValue * parseSecondPentagonInputValue ;
    const result = twodecimal(multiply);
    document.getElementById('pentagon').innerText = result + 'cm';

    document.getElementById('pen-1').style.display = 'block';
    document.getElementById('pen-2').style.display = 'block';

    document.getElementById('pentagon-field-1').value = '';
    document.getElementById('pentagon-field-2').value = '';
});




document.getElementById('ellipse-btn').addEventListener('click',function(){
    const parseFirstEllipseInputValue = getIdValue('ellipse-field-1');
    if(isNaN(parseFirstEllipseInputValue)){
      alert('enter a number in input filed');
      return;
    }
    else if(parseFirstEllipseInputValue < 0){
      alert('enter a positive value');
      return;
    }

    const parseSecondEllipseInputValue = getIdValue('ellipse-field-2');
    if(isNaN(parseSecondEllipseInputValue)){
      alert('enter a number in input filed');
      return;
    }
    else if(parseSecondEllipseInputValue < 0){
      alert('enter a positive value');
      return;
    }

    const multiply = 3.14 * parseFirstEllipseInputValue * parseSecondEllipseInputValue ;
    const result = twodecimal(multiply);
    document.getElementById('ellipse').innerText = result + 'cm';

    document.getElementById('ell-1').style.display = 'block';
    document.getElementById('ell-2').style.display = 'block';

    document.getElementById('ellipse-field-1').value = '';
    document.getElementById('ellipse-field-2').value = '';
});
//End main assignment calculation.....


//Start random bg-color create......
        function randomColor(){
        let color = "";
        const letters = "0123456789ABCDEF";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return "#" + color;
        };

        const colorChange = document.getElementById("color-1");
        colorChange.addEventListener("mouseover", () => {
        colorChange.style.backgroundColor = randomColor();
        });
        const colorChangetwo = document.getElementById("color-2");
        colorChangetwo.addEventListener("mouseover", () => {
          colorChangetwo.style.backgroundColor = randomColor();
        });
        const colorChangeThree = document.getElementById("color-3");
        colorChangeThree.addEventListener("mouseover", () => {
          colorChangeThree.style.backgroundColor = randomColor();
        });
        const colorChangeFour = document.getElementById("color-4");
        colorChangeFour.addEventListener("mouseover", () => {
          colorChangeFour.style.backgroundColor = randomColor();
        });
        const colorChangeFive = document.getElementById("color-5");
        colorChangeFive.addEventListener("mouseover", () => {
          colorChangeFive.style.backgroundColor = randomColor();
        });
        const colorChangeSix = document.getElementById("color-6");
        colorChangeSix.addEventListener("mouseover", () => {
        colorChangeSix.style.backgroundColor = randomColor();
        });
//End randon bg-color create.....  



//Convert Centimeter to Meter .....
function clearText(Id){
  const catchId = document.getElementById(Id);
  const catchIdValue = parseFloat(catchId.innerText);
  const square = catchIdValue / 100;
  const result = twodecimal(square);
  catchId.innerText = result + 'm';
  return result;
}

document.getElementById('tri2').addEventListener('click', function(){
  clearText('triangle',);
})
document.getElementById('rec-2').addEventListener('click', function(){
  clearText('rectangle');
})
document.getElementById('para-2').addEventListener('click', function(){
  clearText('parallelogram');
})
document.getElementById('rho-2').addEventListener('click', function(){
  clearText('rhombus');
})
document.getElementById('pen-2').addEventListener('click', function(){
  clearText('pentagon');
})
document.getElementById('ell-2').addEventListener('click', function(){
  clearText('ellipse');
})