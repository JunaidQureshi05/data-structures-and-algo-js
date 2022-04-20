
// 1 -  push [x]
// 2 -  pop  [x]
// 3 -  shift [x]
// 4 -  unshift [x]
// 5 -  Add at  [x]
// 6 -  Remove at [x]
// 7 -  Get at [x]

// O(n) Time
// O(1) access
// O(n) Insertion
// O(n) Deletion
// O(1) Push
// O(1) Pop
// O(1) Access

class Array{
    constructor(){
        this.data = {}
        this.length=0;
    }
    push(value){
        this.data[this.length] = value;
        this.length++;
    }
    pop(){
        if(this.length==0){
            console.log('Array is empty');
            return null
        }
        let poppedElement = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--
        return poppedElement
    }
    shift(){
        if(this.length===0){
            console.log('Array is empty')
            return null;
        }
        let element = this.data[0]
        for(let i=0;i<this.length;i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1];
        this.length--;
        return element
    }
   unshift(value){
       for(let i=this.length-1;i>=0;i--){
           this.data[i+1] = this.data[i]
       }
       this.data[0]= value
       this.length++
   }
  addAt(idx,value){
      if(idx<0 || idx>this.length){
          console.log('Please enter a valid index');
          return 
      }
      else if (idx==0){
          this.unshift(value);
      }
      else if(idx==this.length){
          this.push(value)
      }
      else{
          const {data,length} = this
          for(let i=length-1;i>=idx;i--){
             data[i+1] = data[i]
          }
          data[idx] = value;
          this.length++;
      }
  }
    removeAt(idx){
        let {data,length} = this;
        if(idx<0 || idx >= length){
            console.log('Please enter a valid idx')
            return null
        }
        else if(idx===0){
            let element = data[0]
            this.shift();
            return element;
        }
        else if(idx===length-1){
            return this.pop()
        }
        else{
            let element = data[idx]
            for(let i=idx;i<this.length-1;i++){
                this.data[i] = this.data[i+1]
            }
            delete data[length-1]
            this.length--;
            return element
        }
    }
    getAt(idx){
       let {data,length} = this
        if(idx<0  || idx>=length){
            console.log('Index out of range')
            return null
        }
        return data[idx];
    }
}

     

let list = new Array()
list.push('a')
list.push('b')
list.push('c')
list.push('d')
console.log(list.getAt(4))
console.log(list)
