import { fromEvent } from 'rxjs';

const observabler = {
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('complete!!'),
};

const source$ = fromEvent(document, 'click');

const subscription = source$.subscribe(observabler);
const subscriptionTwo = source$.subscribe(observabler);

setTimeout(() => {
  subscription.unsubscribe();
  subscriptionTwo.unsubscribe();
}, 3000);
