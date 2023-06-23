/* To give priority the particular data in the Queue
    @params([value,priority]:[any,number])
*/

function PriorityQueue() {
  var collection = [];

  //To print the collection
  this.printCollection = () => console.log(collection);

  //To check if the queue is empty
  this.isEmpty = () => collection.length === 0;

  //To add data based on priority
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) collection.push(element);
    }
  };

  //To remove data from the queue
  this.dequeue = function () {
    var value = collection.shift();
    return value[0];
  };

  //To get the first element from the queue
  this.front = () => collection[0][0];

  //To get the size of the queue
  this.size = () => collection.length;
}

var pq = new PriorityQueue();
pq.enqueue(["Name 1", 2]);
pq.enqueue(["Name 2", 3]);
pq.enqueue(["Name 3", 1]);
pq.printCollection();
