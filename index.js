class MyArray {
    constructor() {
        this.length = 0;
    }

    push() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            return this.length++;
        }

    }
    pop() {
        let lastItem = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return lastItem;

    }

    forEach(fn) {
        for (let i = 0; i < this.length; i++) {
            return fn(this[i]);
        }
    }

    map(fn) {
        const newArr = new MyArray();
        for (let i = 0; i < this.length; i++) {
            newArr.push(fn(this[i], i, this));
        }
        return newArr;
    }

    flat(){
        const newArr = new MyArray();
        for (let i = 0; i < this.length; i++){
            if (typeof this[i] === Number ){
                newArr.push(this[i]);
            } else if (typeof this[i] === Array){
                const newArr2 = [...this[i]];
                if (newArr2.includes(Array)){
                    this.flat();
                }
                newArr.push(newArr2);

            } 
        }
    }
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => ({
                done: i > this.length - 1,
                value: this[i++]
            })
        }
    }
}

const myarr = new MyArray();
myarr.push(1, 2, 3, 4);
