/* eslint-disable */

import CircularLinkedList from '../../src/LinkedList/CircularLinkedList';

//TODO : Throw Error Code file
describe('Circular Linked List 단위 테스트', () => {
  describe('리스트에 두 개 이상의 요소가 있는 상황에서의 기본 연산 테스트', () => {
    let list: CircularLinkedList<number>;
    beforeEach(() => {
      list = new CircularLinkedList<number>();
      list.push_front(1);
      list.push_front(2);
    });

    test('front', () => {
      expect(list.front()).toEqual(2);
    });
    test('back', () => {
      expect(list.back()).toEqual(1);
    });
    test('push_front', () => {
      list.push_front(3);

      expect(list.front()).toEqual(3);
      expect(list.size).toEqual(3);
    });
    test('push_back', () => {
      list.push_back(0);

      expect(list.back()).toEqual(0);
      expect(list.size).toEqual(3);
    });
    test('pop_front', () => {
      list.pop_front();

      expect(list.front()).toEqual(1);
      expect(list.size).toEqual(1);
    });
    test('pop_back', () => {
      list.pop_back();

      expect(list.back()).toEqual(2);
      expect(list.size).toEqual(1);
    });
    test('empty', () => {
      expect(list.empty()).toBeFalsy();
    });
  });

  describe('리스트에 하나의 요소만 있는 상황에서의 경계 조건 테스트', () => {
    let list: CircularLinkedList<number>;
    beforeEach(() => {
      list = new CircularLinkedList<number>();
      list.push_front(1);
    });

    test('pop_front', () => {
      list.pop_front();

      expect(() => list.front()).toThrow();
      expect(() => list.back()).toThrow();
      expect(list.size).toEqual(0);
      expect(list.empty).toBeTruthy();
    });
    test('pop_back', () => {
      list.pop_back();

      expect(() => list.front()).toThrow();
      expect(() => list.back()).toThrow();
      expect(list.size).toEqual(0);
      expect(list.empty).toBeTruthy();
    });
  });

  describe('리스트가 비어 있는 상황에서의 예외 사항 테스트', () => {
    let list: CircularLinkedList<number> = new CircularLinkedList<number>();

    test('front 호출', () => {
      expect(() => list.front()).toThrow();
    });
    test('back 호출', () => {
      expect(() => list.back()).toThrow();
    });
    test('pop_front 호출', () => {
      expect(() => list.pop_front()).toThrow();
    });
    test('pop_back 호출', () => {
      expect(() => list.pop_back()).toThrow();
    });
  });
});
