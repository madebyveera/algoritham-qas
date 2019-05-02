import LinkedList from './LinkedList'
class Runner {
    run() {
        var ll = new LinkedList(); 
        console.log(ll.isEmpty()); 
        ll.add(10); 
        ll.printList(); 
        console.log(ll.size_of_list()); 

        ll.add(20); 
        ll.add(30); 
        ll.add(40); 
        ll.add(50); 
        // returns 10 20 30 40 50 
        ll.printList(); 
        // prints 50 from the list 
        console.log("is element removed ?" + ll.removeElement(50)); 
        // prints 10 20 30 40 
        ll.printList(); 
        // returns 3 
        console.log("Index of 40 " + ll.indexOf(40)); 
        // insert 60 at second positon 
        // ll contains 10 20 60 30 40 
        ll.insertAt(60, 2); 
        ll.printList(); 
        // returns false 
        console.log("is List Empty ? " + ll.isEmpty()); 
        // remove 3rd element from the list 
        console.log(ll.removeFrom(3)); 
        // prints 10 20 60 40 
        ll.printList(); 
    }
}

export default Runner;