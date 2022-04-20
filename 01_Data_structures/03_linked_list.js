// Write a program to implement linked list data structure with the following functionalities

// 1 - add [x]
// 2 - addAt [x]
// 3 - removeAt [x]
// 4 - display a-->b-->c [x]
// 5  - reverse [x]
// 6  - getLength [x]
// 7  - addFirst [x]
//  8 - addLast [x]

// O(n)  Space
// O(1)  Add
//  O(1) Remove
//  O(n) Lookup

class Node {
    constructor(value){
        this.value  = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail =  null;
        this.length = 0;
    }
    add(value){
        let node = new Node(value);
        if(this.length==0){
            this.head = this.tail = node;
        }
        else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    addFirst(value){
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
    }
    addLast(value){
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node
        this.length++
    }
    addAt(idx,value) {
        let node = new Node(value);
        if(idx<0 || idx> this.length){
            console.log('Please enter a valid index')
            return 
        }
        else if(idx==0){
            this.addFirst(value)
        }
        else if(idx==this.length){
            this.addLast(value)
        }
        else{
            let current_node = this.head
            for(let i=0;i<idx-1;i++){
               current_node = current_node.next; 
            }
            let trailing  = current_node.next;
            node.next = trailing
            current_node.next = node;
            this.length++;
        }
    }
    removeAt(idx){
        if(this.length===0){
            console.log('Linked List is empty')
            return
        }
        if(idx<0 || idx>=this.length){
            console.log("Enter a valid idx")
            return
        }
        if(this.length===1){
            this.head=this.tail=null
        }
        else if(idx==0){
            this.head= this.head.next;
        }
        else{
            let current_node = this.head
            for(let i=0;i<idx-1;i++){
                current_node = current_node.next
            }
            current_node.next = current_node.next.next;
        }
        this.length--;
        
    }
    reverse(){
        let current_node = this.head;
        let prev = null;
        while(current_node){
            let next = current_node.next;
            current_node.next = prev;
            prev =current_node
            current_node = next
        }
        [this.head,this.tail] = [this.tail,this.head]
    }
    display(){
        let current_node = this.head;
        let elements =[]
        while(current_node){
            elements.push(current_node.value)
            current_node = current_node.next
        }
        console.log(elements.join(' --> '))
    }
    getLength(){
        console.log(this.length)
        return this.length
    }
}


let myList = new LinkedList();
myList.add(1)
myList.add(2)
myList.add(3)
myList.add(4)
myList.add(5)
myList.add(6)
myList.addAt(4,'Junaid')
myList.reverse()
myList.display()
myList.getLength()
console.log(myList)
