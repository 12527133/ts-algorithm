export default class MyArray<T> {
    data:Array<T>;
    size:number;
    capitacity:number;

    constructor(capitacity:number) {
        this.data = new Array(capitacity);
        this.size = 0;
        this.capitacity = capitacity;
    }

    add(e:T):T {
       return this.addAtIndex(this.size,e);
    }
 
    addAtIndex(index:number,e:T):T {
        this.checkIndex(index);
        this.expandSize();
        if (index !== this.size) {
            for (let i = this.size - 1; i >= index; i--) {
                this.data[i + 1] = this.data[i];
            }
            this.data[index] = e;
        } else {
            this.data[this.size] = e;
        }
        this.size++;
        return e;
    }

    checkIndex(index:number):void {
        if (index < 0 || index > this.size) {
            throw new Error('getByIndex failed, index is illegal');
        }
    }

    removeAtIndex(index:number):void {
        this.checkIndex(index);
        this.shrinkSize();
        //1,2  remove 1
        for (let i = index + 1; i < this.size; i++) {
            this.data[i - 1] = this.data[i];
        }
        this.size--;
    }

    expandSize():void {
        if (this.size < this.capitacity) {
            return;
        }
        const newData = new Array(this.capitacity * 2);
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[i];
        }
        this.data = newData;
        this.capitacity = this.capitacity * 2;
        console.log('expandSize:'+this.capitacity);
    }
    shrinkSize():void {
        if (this.size >= this.capitacity/2) {
            return;
        }
        const newSize = this.capitacity / 2;
        const newData = new Array(newSize);
        for (let i = 0; i < this.data.length; i++) {
            newData[i] = this.data[i];
        }
        this.data = newData;
        this.capitacity = newSize;
        console.log('shrinkSize:'+this.capitacity);
    }
    remove(index:number):void {
       this.removeAtIndex(index);
    }
    getSize():number {
        return this.size;
    }
    getCapitacity():number {
        return this.capitacity;
    }
    getByIndex(index:number):T {
        if (index < 0 || index >= this.size) {
            throw new Error('getByIndex failed, index is illegal');
        }
        return this.data[index];
    }
  
  }