export default class MyArray {
    constructor(capitacity) {
        this.data = new Array(capitacity);
        this.size = 0;
        this.capitacity = capitacity;
    }
    add(e) {
        if (this.size === this.capitacity) {
            throw new Error('addLast failed, array is full');
        }
        this.data[this.size] = e;
        this.size++;
    }
    remove(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('remove failed, index is illegal');
        }
        //1,2  remove 1
        for (let i = index + 1; i < this.size; i++) {
            this.data[i - 1] = this.data[i];
        }
        this.size--;
    }
    getSize() {
        return this.size;
    }
    getCapitacity() {
        return this.capitacity;
    }
}
//# sourceMappingURL=MyArray.js.map