/* Sets */

function mySet() {
  var collection = [];

  //To check presence of element and return true or false
  this.has = (element) => collection.indexOf(element) !== -1;

  //To return all the elements in the set
  this.values = () => collection;

  //To add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  //To remove an element from a set
  this.remove = function (element) {
    if (this.has(element)) {
      let index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  //To get the size of the collection
  this.size = () => collection.length;

  //To return union of two sets
  this.union = function (otherSet) {
    var union = new Set();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach((e) => union.add(e));
    secondSet.forEach((e) => union.add(e));
    return union;
  };

  //To return the intersection of two sets
  this.intersection = function (otherSet) {
    var intersection = new Set();
    var firstSet = this.values();
    firstSet.forEach((e) => {
      if (otherSet.has(e)) intersection.add(e);
    });
    return intersection;
  };

  //To return the difference of two sets
  this.difference = function (otherSet) {
    var difference = new Set();
    var firstSet = this.values();
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) difference.add(e);
    });
    return difference;
  };

  //To check if the set is subset of a different set
  this.subset = function (otherSet) {
    var firstSet = this.values();
    return firstSet.every((e) => {
      return otherSet.has(e);
    });
  };
}

var setA = new mySet();
var setB = new mySet();
setA.add("A");
setB.add("A");
setA.add("B");
setB.add("B");
setA.add("C");
setB.add("D");

console.log(setA.intersection(setB));
console.log(setA.difference(setB));
