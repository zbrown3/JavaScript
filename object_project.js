const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
      get getApp() {
        return this.appetizers;
      },
      get getMain() {
        return this.mains;
      },
      get getDessert() {
        return this.desserts;
      },
      set setAppetizer(app) {
        this.appetizers.push(app);
      },
      set setMain(main) {
        this.mains.push(main);
      },
      set setDessert(dessert) {
        this.desserts.push(dessert);
      }
    },
    get courses() {
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts
      }
    },
    addDishToCourse(courseName,dishName,dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      let dishes = this._courses[courseName];
      let generatedIndex = Math.floor(Math.random() * dishes.length);
      return dishes[generatedIndex];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + mains.price + desserts.price;
      return `Your meal is ${appetizer.name}, ${mains.name}, and ${desserts.name}.  The price is $${totalPrice}.`;
    }
  }
menu.addDishToCourse('appetizers','loaded potato soup',7.50);
menu.addDishToCourse('mains','honey bbq ribs',20.00);
menu.addDishToCourse('desserts','cake',5.00);
menu.addDishToCourse('appetizers','mozzarella sticks',5.50);
menu.addDishToCourse('mains','steak sirloin',18.00);
menu.addDishToCourse('desserts','ice cream',3.00);
menu.addDishToCourse('appetizers','fried pickles',8.50);
menu.addDishToCourse('mains','chicken strips',10.00);
menu.addDishToCourse('desserts','vanilla pudding',6.00);
let meal = menu.generateRandomMeal();
console.log(meal);