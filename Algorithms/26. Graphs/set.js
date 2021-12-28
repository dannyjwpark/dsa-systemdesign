const s = new Set();

s.add([1,2]);
s.add(3);
s.add("four");
s.add("four");

s.values(); // returns a new iterator object that yields the values for each element in Set
s.delete(3); // deletes 3 from set

console.log(s);
console.log(s.has("four"));  // true
console.log(s.has("five"));  // false