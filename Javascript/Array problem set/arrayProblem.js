function printReverse(array){
  while (array.length > 0){
    var output = array.pop();
    console.log(output);
  }
}

function isUniform(array){
  var uniform = true;
  var firstItem = array.pop();
  while (array.length > 0 && uniform === true){
    var currentItem = array.pop();
    if(firstItem !== currentItem){
      uniform = false;
    }
  }

  console.log(uniform);
}


function sumArray(array){
  var sum = 0;
  while (array.length > 0){
    sum += array.pop();
  }
  console.log(sum);
}

function max(array){
  var max = array.pop();
  while(array.length > 0){
    var currentItem = array.pop();
    if(currentItem > max){
      max = currentItem;
    }
  }
  console.log(max);
}


// isUniform([1,1,1,2]);

// sumArray([-5,100]);

max([-5,100]);
