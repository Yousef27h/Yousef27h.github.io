class MyArray{
    constructor(arr){
        this.arr = arr;
    }

    even(){
        return this.arr.filter(num=>num%2===0);
    }

    odd(){
        return this.arr.filter(num=>num%2!==0);
    }
}

module.exports = MyArray;