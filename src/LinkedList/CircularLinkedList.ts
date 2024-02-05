/* eslint-disable */

interface CLLNode<T> {
  data: T;
  next: CLLNode<T>;
}

class CircularLinkedList<T> {
  root: CLLNode<T> | null;

  size: number = 0;

  constructor() {
    this.root = null;
  }

  front(): T {}

  back(): T {}

  push_front(value: T): void {}

  push_back(value: T): void {}

  pop_front(): void {}

  pop_back(): void {}

  empty(): boolean {}
}
