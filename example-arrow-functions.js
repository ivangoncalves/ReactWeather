// var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach( function(name){
//   console.log('forEach', name)
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
//   console.log('something else');
//   var x = 'something';
// });
//
// names.forEach((name) => console.log(name));

var addStatement = (a,b) => {
  console.log(a + b);
}

addStatement(1,2);

var addSExpression = (a,b) => a + b;
console.log(addSExpression(3,3));
