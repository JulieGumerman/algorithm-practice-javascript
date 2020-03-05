class Dog {
    constructor(name, breed) {
        this.name = name
        this.breed = breed
    }
    aboutWog() {
        return `${this.name} is a lovely ${this.breed}`
    }
}

let rev = new Dog("Reverie", "whoodle")

console.log(rev.aboutWog())