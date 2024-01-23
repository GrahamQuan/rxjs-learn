import { from } from 'rxjs';

function* hello() {
  yield 'hello';
  yield 'world';
  yield '!';
}

const observabler = {
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('complete!!'),
};

// from accept array, promise, generator
// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = from(fetch('https://jsonplaceholder.typicode.com/todos/1'));
const source$ = from(hello());

const subscription = source$.subscribe(observabler);

setTimeout(() => {
  subscription.unsubscribe();
}, 3000);
