"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyArray {
    constructor(capitacity) {
        this.data = new Array(capitacity);
        this.size = 0;
        this.capitacity = capitacity;
    }
    add(e) {
        return this.addAtIndex(e, this.size);
    }
    addAtIndex(index, e) {
        if (this.size === this.capitacity) {
            throw new Error('addLast failed, array is full');
        }
        if (index < 0 || index > this.size) {
            throw new Error('add failed, index is illegal');
        }
        if (index !== this.size) {
            for (let i = this.size - 1; i >= index; i--) {
                this.data[i + 1] = this.data[i];
            }
            this.data[index] = e;
        }
        else {
            this.data[this.size] = e;
        }
        this.size++;
        return e;
    }
    removeAtIndex(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('remove failed, index is illegal');
        }
        //1,2  remove 1
        for (let i = index + 1; i < this.size; i++) {
            this.data[i - 1] = this.data[i];
        }
        this.size--;
    }
    remove(index) {
        this.removeAtIndex(index);
    }
    getSize() {
        return this.size;
    }
    getCapitacity() {
        return this.capitacity;
    }
    getByIndex(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('getByIndex failed, index is illegal');
        }
        return this.data[index];
    }
}
exports.default = MyArray;
