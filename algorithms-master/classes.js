class MyArray {
    constructor(){
        this.head = null
        this.len = 0
    }

    push(value) {
        this.head = new Item(value, this.head)
        
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

        while (current != null) {

            if (currentPosition == position){
                return current
            }

            current = current.next
            currentPosition++
        }

        return null  
    }

    last(){
        let current = this.head
        
        if (current == null)
            return null

        while (current.next != null){
            current = current.next 

        }

        return current
    }

    max(){
        let current = this.head
        
        if (current == null)
            return null

        let max = current.value 
        let maxFoundAt = 0    

        while (current.next != null){
            current = current.next 

            if(current.value > max)
               max = current.value
        }

    }

    deleteAt(position) {
        let previous = this.elementAt(position - 1)
        let next = this.elementAt(position + 1)
        if(previous == null){
            this.head = next
        }

        else
            previous.next = next
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

//console.log(a.head)
console.log(a.elementAt(3))
a.deleteAt(3)
console.log(a.elementAt(3))
//console.log(a.sum())


//console.log('all elements', a)
//console.log(list.length())