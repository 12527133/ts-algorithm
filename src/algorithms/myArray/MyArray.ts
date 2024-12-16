export default class MyArray {
    data:Array<number>;
    size:number;
    capitacity:number;

    constructor(capitacity:number) {
        this.data = new Array(capitacity);
        this.size = 0;
        this.capitacity = capitacity;
    }

    add(e:number):number {
       return this.addAtIndex(e,this.size);
    }
 
    addAtIndex(e:number,index:number):number {
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
        } else {
            this.data[this.size] = e;
        }
        this.size++;
        return e;
    }

    removeAtIndex(index:number):void {
        if (index < 0 || index >= this.size) {
            throw new Error('remove failed, index is illegal');
        }
        //1,2  remove 1
        for (let i = index + 1; i < this.size; i++) {
            this.data[i - 1] = this.data[i];
        }
        this.size--;
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
    getByIndex(index:number):number {
        if (index < 0 || index >= this.size) {
            throw new Error('getByIndex failed, index is illegal');
        }
        return this.data[index];
    }
  
  }