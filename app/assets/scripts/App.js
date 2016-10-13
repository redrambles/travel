var $ = require('jquery');
//var Person = require('./modules/Person.js');
import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes 0$.");
  }
}

var john = new Person("John Doe", "orange");
john.greet();

var jane = new Adult("Jane Smith", "green");
jane.greet();
jane.payTaxes();

// $("h1").hide();