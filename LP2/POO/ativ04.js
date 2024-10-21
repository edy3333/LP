class Shape {
    area() {
      return 0;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    area() {
      return 0.5 * this.base * this.height;
    }
  }
  function calculateArea(shape) {
    console.log(`A área da forma é: ${shape.area()}`);
  }
  const rectangle = new Rectangle(5, 10);
  const circle = new Circle(3);
  const triangle = new Triangle(4, 6);

  calculateArea(rectangle);
  calculateArea(circle);
  calculateArea(triangle);