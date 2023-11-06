// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console
//   `${name} moving to ${topSpeed}`
class SpaceShip {
  constructor(name, topSpeed) {
    (this.name = name), (this.topSpeed = topSpeed);
  }
  accelerate() {
    return `${this.name} moving to ${this.topSpeed}`;
  }
}

// 2. Call the constructor with a couple ships,
// and call accelerate on both of them.

let spaceShip1 = new SpaceShip("Milleniun Falcon", 9130000);
console.log(spaceShip1);
console.log(spaceShip1.accelerate());

let spaceShip2 = new SpaceShip("Asgards Daedalus", 60000000);
console.log(spaceShip2);
console.log(spaceShip2.accelerate());

let spaceShip3 = new SpaceShip("Fireball XL5", 24000000);
console.log(spaceShip3);
console.log(spaceShip3.accelerate());
