function log(msg) {
  console.log(msg);
}

//===============================================================
//_CURRYING
//===============================================================

/*eS5 STYLE
var curryIt = function(uncurried) {
  var parameters = Array.prototype.slice.call(arguments, 1);
  return function() {
    return uncurried.apply(this, parameters.concat(
      Array.prototype.slice.call(arguments, 0)
    ));
  };
};
*/

//notes!!! to go from es5 to es6 i had to 
//1) use spread operators ...args
//2) remove the splice things.. because we are already dealing with arrays
//3) Arrow notation on return function
//4) Use Reflect.apply on 'func'
//5) explode the ...args and ...args2 into a new array

function curryIt(func, ...args) {
  return (...args2) => {
    return Reflect.apply(func, null, [...args, ...args2]);
  };
}

function greeter(greeting, separator, emphasis, name) {
  log(greeting + separator + name + emphasis);
}

const greetHello = curryIt(greeter, 'Hello', ',', '.');
const greetHello2 = curryIt(greeter, 'Howdy', ' - ');

greetHello('Micke');
greetHello2('!!!', 'Jepser');
//===============================================================
//===============================================================

