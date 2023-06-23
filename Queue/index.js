/* Queues */
function Queue() {
  let collection = [];
  //To get the collection data
  this.print = () => console.log(collection);

  //To add new element to the queue
  this.enqueue = (element) => collection.push(element);

  //To remove the first element from the queue
  this.dequeue = () => collection.shift();

  //To get the first element from the queue
  this.front = () => collection[0];

  //To get the size of the queue
  this.size = () => collection.length;

  //To check if the queue is empty
  this.isEmpty = () => collection.length === 0;
}

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
q.print();
console.log(q.front());
