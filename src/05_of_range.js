import { of, range } from 'rxjs';

function end() {
  return 'end...';
}

const observabler = {
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('complete!!'),
};

// const source$ = of(1, 2, 3, 4, 5);
const source$ = range(1, 5);

const subscription = source$.subscribe(observabler);

console.log(end());

setTimeout(() => {
  subscription.unsubscribe();
}, 3000);
