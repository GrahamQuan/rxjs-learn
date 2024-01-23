import { Observable } from 'rxjs';

const observabler = {
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('complete!!'),
};

const observable = new Observable((subscriber) => {
  subscriber.next('hello');
  subscriber.next('world');
  subscriber.complete();
  subscriber.next('bye'); // not showing
});

// (1) with observabler object (more clean way to do)
observable.subscribe(observabler);

// (2) 1st is nextFn, 2nd is errFn, 3rd is completeFn
// observable.subscribe(
//   (val) => console.log('next', val),
//   (err) => console.log('error', err),
//   () => console.log('complete!!')
// );
