import { DoubleLinkedList } from '../../src/LinkedList/DoubleLinkedList';

describe('DoubleLinkedList', () => {
  let list: DoubleLinkedList<number>;

  beforeEach(() => {
    list = new DoubleLinkedList<number>();
  });

  test('initially list is empty', () => {
    expect(list.isEmpty()).toBeTruthy();
    expect(list.getSize()).toBe(0);
  });

  test('adds items to the front and back', () => {
    list.push_front(1);
    expect(list.front()).toBe(1);
    expect(list.back()).toBe(1);
    expect(list.getSize()).toBe(1);

    list.push_back(2);
    expect(list.front()).toBe(1);
    expect(list.back()).toBe(2);
    expect(list.getSize()).toBe(2);

    list.push_front(0);
    expect(list.front()).toBe(0);
    expect(list.back()).toBe(2);
    expect(list.getSize()).toBe(3);
  });

  test('removes items from the front and back', () => {
    list.push_front(1);
    list.push_back(2);

    list.pop_front();
    expect(list.getSize()).toBe(1);
    expect(list.front()).toBe(2);

    list.pop_back();
    expect(list.getSize()).toBe(0);
    expect(list.isEmpty()).toBeTruthy();
  });

  test('inserts and removes items at specific positions', () => {
    list.insert(0, 1);
    list.insert(1, 3);
    list.insert(1, 2);

    expect(list.getSize()).toBe(3);
    expect(list.front()).toBe(1);
    expect(list.back()).toBe(3);

    list.remove(1);
    expect(list.getSize()).toBe(2);
    expect(list.front()).toBe(1);
    expect(list.back()).toBe(3);
  });

  describe('Boundary Tests for an empty list', () => {
    test('pop_front on an empty list', () => {
      expect(() => list.pop_front()).not.toThrow();
      expect(list.isEmpty()).toBeTruthy();
    });

    test('pop_back on an empty list', () => {
      expect(() => list.pop_back()).not.toThrow();
      expect(list.isEmpty()).toBeTruthy();
    });
  });

  describe('Boundary Tests with a single element in the list', () => {
    beforeEach(() => {
      list.push_front(1); 
    });

    test('pop_front on a single-element list', () => {
      list.pop_front();
      expect(list.isEmpty()).toBeTruthy();
    });

    test('pop_back on a single-element list', () => {
      list.pop_back();
      expect(list.isEmpty()).toBeTruthy();
    });

    test('front and back return the same element on a single-element list', () => {
      expect(list.front()).toBe(1);
      expect(list.back()).toBe(1);
    });
  });
});
