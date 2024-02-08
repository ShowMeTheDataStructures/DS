interface DoubleLinkedListNode<T> {
    data: T;
    next: DoubleLinkedListNode<T> | null;
    prev: DoubleLinkedListNode<T> | null;
}

export class DoubleLinkedList<T> {
    private head: DoubleLinkedListNode<T> | null = null;
    private tail: DoubleLinkedListNode<T> | null = null;
    private _size: number = 0;

    /**
     * front - Get the front item of the list.
     * @returns {T | null} - The data of the front item, or null if the list is empty.
     */
    front(): T | null {
        return this.head ? this.head.data : null;
    }

    /**
     * back - Get the back item of the list.
     * @returns {T | null} - The data of the back item, or null if the list is empty.
     */
    back(): T | null {
        return this.tail ? this.tail.data : null;
    }

    /**
     * push_front - Add an item to the front of the list.
     * @param {T} value - The data to add to the front of the list.
     */
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

    /**
     * push_back - Add an item to the back of the list.
     * @param {T} value - The data to add to the back of the list.
     */
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

    /**
     * pop_front - Remove the front item of the list.
     */
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

    /**
     * pop_back - Remove the back item of the list.
     */
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

    /**
     * insert - Insert an item at a specific index.
     * @param {number} index - The index at which to insert.
     * @param {T} value - The data to insert.
     */
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

    /**
     * remove - Remove an item from a specific index.
     * @param {number} index - The index from which to remove the item.
     */
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

    /**
     * getSize - Get the size of the list.
     * @returns {number} - The size of the list.
     */
    getSize(): number {
        return this._size;
    }

    /**
     * isEmpty - Check if the list is empty.
     * @returns {boolean} - True if the list is empty, false otherwise.
     */
    isEmpty(): boolean {
        return this._size === 0;
    }

    /**
     * printList - Print all items of the list.
     */
    printList(): void {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}
