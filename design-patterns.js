// Builder Pattern Start

class Calculator {
    constructor(props) {
        this.result = 0;
    }

    add(num) {
        this.result += num;
        return this;
    }
    // add method is adding the num parameter to the result

    subtract(num) {
        this.result -= num;
        return this;
    }
    // subtract method is subtracting the num parameter from the result 

    multiply(num) {
        this.result *= num;
        return this;
    }
    // multiply method is multiplying the num parameter by the result

    divide(num) {
        this.result /= num;
        return this;
    }
    // divide method is dividing the num parameter by the result

    compute() {
        return this.result
    }
    // compute method is returning the final result
}

// Usage
let calculator = new Calculator();
let calculator2 = new Calculator();
// creating variables to call the class

let expression1 = calculator.add(5).subtract(1).multiply(2).divide(2);
let expression2 = calculator.add(1).subtract(4).multiply(2).divide(8);
// create variables that give the methods in the class values

console.groupCollapsed('Builder Pattern');
console.log('result 1:', expression1.result);
console.log('result 2', expression2.result);
console.groupEnd();
// logging the results of the methods that we just gave values into the console

// Facade Pattern Start
class CPU {
    freeze(){
        // Code here
    }
    jump(position) {
        // Code here
    }
    execute() {
        // Code here
    }
    // Creates 3 different methods that have no value
}
class Memory {
    load(pos, data) {
        // Code here
    }
}
class HardDrive {
    read(lba, size) {
        // Code Here
    }
}
// create to classes that both contain a method that will be used in the single function

class ComputerFacade {
    constructor() {
        this.processor = new CPU();
        this.ram = new Memory();
        this.hd = new HardDrive();
    }
    start() {
        this.processor.freeze();
        console.log('Processor Freeze Success');
        this.ram.load(this.BOOT_ADDRESS, this.hd.read(this.BOOT_SECTOR, this.SECTOR_SIZE));
        console.log('Ram Load Success');
        this.processor.jump(this.BOOT_ADDRESS);
        console.log('Processor Jump Success');
        // ...
        this.processor.execute();
        console.log('Processor Execute Success');
        // use all the previous methods from other classes on the constructor properties
    }
}

// Usage:
console.groupCollapsed('Facade Pattern');
let computer = new ComputerFacade();
computer.start();
console.groupEnd();
// Total point of this design pattern is to conceal a larger piece of logic by using multiple classes that get called under one big function
// Facade Patter Demo End 

// Composites Pattern Demo Start

class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

// Leaf Subclass
class SoftwareDeveloper extends Employee {
    constructor(name, position) {
        super(name, position);
    }
}

// Leaf Subclass
class FreelanceDesigner extends Employee {
    constructor(name, position) {
        super(name, position);
    }
}

// Composite Subclass
class DevTeamLead extends Employee {
    constructor(name, position) {
        super(name, position);
        this.teamMembers = [];
    }
    addMember(employee) {
        this.teamMembers.push(employee);
    }
    viewTeam() {
        let employeeNames = this.teamMembers.map((member) => member.name);
        return employeeNames;
    }
}

// Usage: 
const seniorDev = new SoftwareDeveloper('Rachel', 'Senior Developer');
const companyDesigner = new FreelanceDesigner('Joey', 'Web Designer');
const teamLead = new DevTeamLead('Regina', 'Dev Team Lead');

teamLead.addMember(seniorDev);
teamLead.addMember(companyDesigner);

console.groupCollapsed('Composites Pattern');
console.log('Team members list:', teamLead.viewTeam());
console.groupEnd();
// This pattern design has classes with a bunch different parts to create a single point where because the access for all the parts
// Composites Pattern Demo End

// Observer Pattern Demo Start
class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter((sub) => sub !== fn);
    }

    broadcast(data) {
        this.observers.forEach((sub) => sub(data));
    }
}
// creating the single class that references all of the objects

// Usage:
const getWordCount = (text) => (text ? text.trim().split(/\s+/).length : 0);

const wordCountElement = document.createElement('p');

wordCountElement.className = 'wordCount';
wordCountElement.innerHTML = 'Word Count: <strong id="blogWordCount">0</strong>';
document.body.appendChild(wordCountElement);

const blogObserver = new EventObserver();

blogObserver.subscribe((text) => {
    const blogCount = document.getElementById('blogWordCount');

    blogCount.textContent = getWordCount(text);
});

const blogPost = document.getElementById('blogPost');

blogPost.addEventListener('keyup', () => blogObserver.broadcast(blogPost.value));
// This is where we add some of the html code and link everything together so stuff will actually show up on the webpage
// Observer Pattern Demo End

/* DESIGN PATTERNS REVIEW 
The 3 types of design patterns are
1. Creation Patterns
2. Structural Patterns
3. Behavioral Patterns

You would use the Facade design pattern when you want to conceal or protect a larger piece of logic under a single function

IIFE stands for Immediately Invoked Function Expression
The design pattern that often uses this is the Builder Pattern

The observer Pattern is a object that references a collection of objects and has something happen whenever the state of one of those objects changes
*/