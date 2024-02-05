/* eslint-disable */

describe('Circular Linked List 단위 테스트', () => {
  describe('리스트에 두 개 이상의 요소가 있는 상황에서의 기본 연산 테스트', () => {
    let list: CircularLinkedList<number>;
    beforeEach(() => {
      list = new CircularLinkedList<number>();
      list.push_front(1);
      list.push_front(2);
    });

    test('front', () => {});
    test('back', () => {});
    test('push_front', () => {});
    test('push_back', () => {});
    test('pop_front', () => {});
    test('pop_back', () => {});
    test('empty', () => {});
  });

  describe('리스트에 하나의 요소만 있는 상황에서의 경계 조건 테스트', () => {
    let list: CircularLinkedList<number>;
    beforeEach(() => {
      list = new CircularLinkedList<number>();
      list.push_front(1);
    });

    test('front', () => {});
    test('back', () => {});
    test('pop_front', () => {});
    test('pop_back', () => {});
    test('empty', () => {});
  });

  describe('리스트가 비어 있는 상황에서의 예외 사항 테스트', () => {
    let list: CircularLinkedList<number> = new CircularLinkedList<number>();

    test('front 호출', () => {});
    test('back 호출', () => {});
    test('pop_front 호출', () => {});
    test('pop_back 호출', () => {});
  });
});
