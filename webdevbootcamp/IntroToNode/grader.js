function average(scores){
  var sum = 0;
  scores.forEach(function(score){
    sum += score;
  });

  var average = sum/scores.length;

  // return average;
  return Math.round(average);

}
var scores = [90, 98, 89, 100, 100, 86, 94]
console.log(average(scores));
