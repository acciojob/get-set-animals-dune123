//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}

	get getSpecies() {
		return this.species;
	}

	makeSound() {
		console.log("Some generic animal sound");
	}
}

class Dog extends Animal {
	constructor(){
		super("Dog")
	}

	purr(){
		console.log("bark")
	}
}

class Cat extends Animal {
	constructor(){
		super("Cat");
	}
	bark(){
		consoel.log("purr")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
