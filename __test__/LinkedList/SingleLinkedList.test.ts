import { SingleLinkedList } from '../../src/LinkedList/SingleLinkedList'; 

describe('SingleLinkedList', () => {
  let list: SingleLinkedList<number>;

  beforeEach(() => {
    list = new SingleLinkedList<number>();
  });

  test('list is initially empty', () => {
    expect(list.isEmpty()).toBeTruthy();
    expect(list.getSize()).toBe(0);
  });

  test('adds items to the front', () => {
    list.push_front(2);
    expect(list.front()).toBe(2);
    expect(list.back()).toBe(2);
    expect(list.getSize()).toBe(1);

    list.push_front(1);
    expect(list.front()).toBe(1);
    expect(list.getSize()).toBe(2);
  });

  test('adds items to the back', () => {
    list.push_back(1);
    expect(list.front()).toBe(1);
    expect(list.back()).toBe(1);
    expect(list.getSize()).toBe(1);

    list.push_back(2);
    expect(list.back()).toBe(2);
    expect(list.getSize()).toBe(2);
  });

  test('removes items from the front', () => {
    list.push_front(1);
    list.push_back(2);
    list.pop_front();
    expect(list.front()).toBe(2);
    expect(list.getSize()).toBe(1);
  });

  test('removes items from the back', () => {
    list.push_front(1);
    list.push_back(2);
    list.pop_back();
    expect(list.back()).toBe(1);
    expect(list.getSize()).toBe(1);
  });

  test('inserts and removes items at specific positions', () => {
    list.insert(0, 1); // [1]
    list.insert(1, 3); // [1, 3]
    list.insert(1, 2); // [1, 2, 3]

    expect(list.getSize()).toBe(3);
    expect(list.front()).toBe(1);
    expect(list.back()).toBe(3);

    list.remove(1); // [1, 3]
    expect(list.getSize()).toBe(2);
    expect(list.front()).toBe(1);
    expect(list.back()).toBe(3);
  });

  test('list size and empty checks', () => {
    expect(list.isEmpty()).toBeTruthy();
    list.push_back(1);
    list.push_back(2);
    expect(list.isEmpty()).toBeFalsy();
    expect(list.getSize()).toBe(2);

    list.pop_back();
    expect(list.getSize()).toBe(1);
    list.pop_front();
    expect(list.isEmpty()).toBeTruthy();
  });
});
