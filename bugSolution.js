function foo(a, b) {
  if (a === null || b === null) {
    return null; // Now explicitly checks for null only
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(0, 2));   // 2
console.log(foo(1, 0));   // 1