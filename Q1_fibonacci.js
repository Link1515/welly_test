function fibonacci(position) {
  if (position === 0) {
    return 0;
  } else if (position === 1) {
    return 1;
  }

  return fibonacci(position - 2) + fibonacci(position - 1);
}

fibonacci(0);
fibonacci(1);
fibonacci(2);
fibonacci(3);
fibonacci(4);
