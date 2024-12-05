# Unexpected Null Handling in JavaScript

This repository demonstrates a common JavaScript bug related to loose equality (`==`) and null handling.  The `foo` function aims to add two numbers, but its null check using `==` leads to unexpected results when zero (0) is used as input. This is because `0 == null` evaluates to `false`, but the desired behavior might be to treat 0 as a valid number.

## Bug

The `bug.js` file contains the buggy code. The function incorrectly returns `null` when 0 is passed instead of performing the addition operation. This arises from the fact that the condition `a == null || b == null` evaluates to true when a or b is 0 or null, leading to incorrect outputs.

## Solution

The `bugSolution.js` file provides a corrected version. This fix uses strict equality (`===`) to check for null, ensuring that only actual null values are treated as such.  This leads to the intended result where 0 is processed as a valid number.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js` to see the incorrect output.
3. Run `node bugSolution.js` to see the corrected output.