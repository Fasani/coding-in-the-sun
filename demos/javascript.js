let Rectangle = class {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
};
console.log(Rectangle.name);
// output: "Rectangle"

let Rectangle = class Rectangle2 {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
};
console.log(Rectangle.name);
// output: "Rectangle2"
