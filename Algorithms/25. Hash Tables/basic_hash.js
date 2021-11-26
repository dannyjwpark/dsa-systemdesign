// hash table: optimal for:
  // finding values
  // adding new values
  // removing values

// form of hash tables
  // Python: dictionaries
  // Javascript: Objects & Maps
  // Java, Go, Scala: Maps
  // Ruby: Hashes

// Big O
  // Insert: O(1)
  // Deletion: O(1)
  // Access: O(1)

function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}