// Create a class called "monster"
let Monster = class Monster {
    constructor(type, color, element="stone", isScary=true) {
        this.type = type;
        this.color = color;
        this.element = element;
        this.isScary = isScary ? " scary " : " ";
    }

    roar() {
        console.log(`The${this.isScary}${this.color} ${this.type} lets out a tremendous roar!`);
    }

    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }

    fire() {
        console.log(`Being a mean ${this.element} ${this.type}, he also spits an explosion of wild fire!`);
    }

    growl() {
        console.log(`The ${this.color} ${this.element} ${this.type} growls like a huge lightning thunder!`);
    }

  }


// create a few monster instances and call methods
let dragon = new Monster("dragon", "brown", "wood");
dragon.roar();
dragon.fire();

let veleciraptor = new Monster("velociraptor", "green");
veleciraptor.growl();

let pterosaur = new Monster("pterosaur", "silver", "metal");
pterosaur.fly();

// you should be seeing 4 consoles:
// "The scary brown dragon lets out a tremendous roar!"
// "Being a mean wood dragon, he also spits an explosion of wild fire!"
// "The green stone velociraptor growls like a huge lightning thunder!"
// "The silver metal pterosaur flaps its wings and begins to fly."
