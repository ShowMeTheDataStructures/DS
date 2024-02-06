interface DoubleLinkedListNode<T> {
    data: T;
    next: DoubleLinkedListNode<T> | null;
    prev: DoubleLinkedListNode<T> | null;
}

export class DoubleLinkedList<T> {
    private head: DoubleLinkedListNode<T> | null = null;
    private tail: DoubleLinkedListNode<T> | null = null;
    private _size: number = 0;

    front(): T | null {
        return this.head ? this.head.data : null;
    }

    back(): T | null {
        return this.tail ? this.tail.data : null;
    }

    push_front(value: T): void {
        const newNode: DoubleLinkedListNode<T> = { data: value, next: this.head, prev: null };
        if (this.head) {
            this.head.prev = newNode;
        }
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        this._size++;
    }

    push_back(value: T): void {
        const newNode: DoubleLinkedListNode<T> = { data: value, next: null, prev: this.tail };
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
        this._size++;
    }

    pop_front(): void {
        if (!this.head) return;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        this._size--;
    }

    pop_back(): void {
        if (!this.tail) return;
        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        this._size--;
    }

    insert(index: number, value: T): void {
        if (index < 0 || index > this._size) throw new Error("Index out of bounds");
        if (index === 0) {
            this.push_front(value);
            return;
        }
        if (index === this._size) {
            this.push_back(value);
            return;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.next;
        }

        const newNode: DoubleLinkedListNode<T> = { data: value, next: current, prev: current!.prev };
        current!.prev!.next = newNode;
        current!.prev = newNode;
        this._size++;
    }

    remove(index: number): void {
        if (index < 0 || index >= this._size) throw new Error("Index out of bounds");
        if (index === 0) {
            this.pop_front();
            return;
        }
        if (index === this._size - 1) {
            this.pop_back();
            return;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.next;
        }

        current!.prev!.next = current!.next;
        current!.next!.prev = current!.prev;
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
