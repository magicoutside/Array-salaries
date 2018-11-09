class MyArray {
    constructor(){
        this.head = null
        this.len = 0
    }

    push(value){
        let newHead = new Item(value, this.head)
        this.head = newHead
        
        this.len += 1
    }

    pushBack(value){
        let currentLast = this.last()
        let newLast = new Item(value, null)
        //this.last = newLast
        if (currentLast == null)
            this.head = newLast
        else
            currentLast.next = newLast

        this.len += 1   
    }
    elementAt(position){
        let current = this.head
        let currentPosition = 0
        while (current != null){
            current = current.next
            currentPosition++
            if(currentPosition == position){
                return current
            }
        }  
    }

    last(){
        let lastElement = this.head

        while (lastElement != null && lastElement.next != null){
            lastElement = lastElement.next 
        }

        return lastElement
    }

    sum(){
        let sum = 0
        let lastElement = this.head
        
        while (lastElement != null && lastElement.next != null){
            lastElement = lastElement.next
            sum = sum + lastElement.value 
        }

        return sum
    }
    
    length(){
        return this.len
    }

    lengthSlow(){
        let len = 0
        let lastElement = this.head
        
        while (lastElement != null && lastElement.next != null){
            lastElement = lastElement.next
            len = len + 1 
        }

        return len
    }
}

class Item {
    constructor(value, next){
        this.value = value
        this.next = next
    }
}

let a = new MyArray()
//console.log(a) //0

a.pushBack(100)
a.pushBack(200)
a.pushBack(201)
a.pushBack(202)


console.log(a);
console.log(a.elementAt(2))

console.log(a.length()) //2
// a.push(1)
// a.push(2)

//console.log('all elements', a)
//console.log(list.length())