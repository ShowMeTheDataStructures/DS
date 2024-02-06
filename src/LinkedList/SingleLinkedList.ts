interface SingleLinkedListNode<T> {
    data: T;
    next: SingleLinkedListNode<T> | null;
}

export class SingleLinkedList<T> {
    private head: SingleLinkedListNode<T> | null = null;
    private _size: number = 0;

    front(): T | null {
        return this.head ? this.head.data : null;
    }

    back(): T | null {
        if (!this.head) return null;

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        return current.data;
    }

    push_front(value: T): void {
        const newNode: SingleLinkedListNode<T> = { data: value, next: this.head };

        this.head = newNode;
        this._size++;
    }

    push_back(value: T): void {
        const newNode: SingleLinkedListNode<T> = { data: value, next: null };

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this._size++;
    }

    pop_front(): void {
        if (this.head !== null) {
            this.head = this.head.next;
            this._size--;
        }
    }

    pop_back(): void {
        if (this.head !== null) {
            if (this.head.next === null) {
                this.head = null;
            } else {
                let current = this.head;
                while (current.next && current.next.next !== null) {
                    current = current.next;
                }
                current.next = null;
            }
            this._size--;
        }
    }

    insert(index: number, value: T): void {
        if (index < 0 || index > this._size) {
            throw new Error("Index out of bounds");
        }

        const newNode: SingleLinkedListNode<T> = { data: value, next: null };
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current!.next;
            }
            newNode.next = current!.next;
            current!.next = newNode;
        }
        this._size++;
    }

    remove(index: number): void {
        if (index < 0 || index >= this._size) {
            throw new Error("Index out of bounds");
        }

        if (index === 0) {
            this.head = null;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current!.next;
            }
            current!.next = current!.next!.next;
        }
        this._size--;
    }
    getSize(): number {
        return this._size;
    }

    isEmpty(): boolean {
        return this._size === 0;
    }

    printList(): void {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new SingleLinkedList<number>();
console.log("List is empty?", list.isEmpty()); // true

list.push_front(3);
list.push_front(2);
list.push_front(1);
console.log("After pushing front 1, 2, 3");
list.printList(); // 1, 2, 3

list.push_back(4);
console.log("After pushing back 4");
list.printList(); // 1, 2, 3, 4

console.log("List size:", list.getSize()); // 4

list.pop_front();
console.log("After popping front");
list.printList(); // 2, 3, 4

list.pop_back();
console.log("After popping back");
list.printList(); // 2, 3

list.insert(1, 5);
console.log("After inserting 5 at index 1");
list.printList(); // 2, 5, 3

list.remove(1);
console.log("After removing element at index 1");
list.printList(); // 2, 3

console.log("List is empty?", list.isEmpty()); // false
console.log("List size:", list.getSize()); // 2
