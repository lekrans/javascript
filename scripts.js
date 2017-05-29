function log(msg) {
  console.log(msg);
}

//===============================================================
//_CURRYING
//===============================================================
function curryIt(func, ...args) {
  const parameters = args.slice();

  return (...args2) => {
    const params = parameters.concat(args2.slice());

    return Reflect.apply(func, null, params);
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

