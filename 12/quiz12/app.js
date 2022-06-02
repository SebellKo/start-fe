import createAvg from './avg.js';
import createRandom from './random.js';

console.log(createAvg(1, 2, 3));
console.log(createAvg([1, 2, 3]));
console.log(createAvg(1, 2, 'a', 3));
console.log(createAvg([1, 2, 3, 'a']));


console.log(createRandom(1, 10));
console.log(createRandom(1, 'a'));
console.log(createRandom(10));
