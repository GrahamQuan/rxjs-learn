import { Observable } from 'rxjs';

const observabler = {
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('complete!!'),
};

const observable = new Observable((subscriber) => {
  let count = 0;
  const id = setInterval(() => {
    subscriber.next(count);
    count += 1;
  }, 1000);

  return () => {
    console.log('clear setInterval');
    clearInterval(id);
  };
});

const subscription = observable.subscribe(observabler);
const subscriptionTwo = observable.subscribe(observabler);

setTimeout(() => {
  // unsubscribe wont trigger "complete" event
  subscription.unsubscribe();
  subscriptionTwo.unsubscribe();
}, 3500);
