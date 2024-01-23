import { Observable } from 'rxjs';

const observabler = {
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('complete!!'),
};

// (1) manage producer
// (2) manage completion
// (3) manage cleanup on unsubscribe
const observable = new Observable((subscriber) => {
  let count = 0;
  const id = setInterval(() => {
    subscriber.next(count);
    if (count === 2) {
      subscriber.complete();
    }
    count += 1;
  }, 1000);

  return () => {
    console.log('clear setInterval');
    clearInterval(id);
  };
});

observable.subscribe(observabler);
