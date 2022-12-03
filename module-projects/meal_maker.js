const menu = {
    _meals: [],
    _prices: [],
    set meals(mealToCheck) {
      mealToCheck.every(function(meal){ // .every method was used instead of .forEach so .push method will stop upon invalid typeof, allowing user to identify error and continue input systematically | Project extension
        if (typeof meal === 'string') {
          return menu._meals.push(meal);
        } else {
          console.log('Erorr: Please input words only!');
        }
      });
    },
    set prices(priceToCheck) {
      priceToCheck.every(function(price){ // .every method was used instead of .forEach so .push method will stop upon invalid typeof, allowing user to identify error and continue input systematically | Project extension
        if (typeof price === 'number') {
          return menu._prices.push(price);
        } else {
          console.log('Error: Please input numbers only!');
        }
      });
    },
    // Random meal selection for Today's Special | Project extension
    get todaysSpecial() {
      let idx = Math.floor(Math.random() * this._meals.length);
      if (this._meals && this._prices) {
        return `Today's Special is ${this._meals[idx]} for ${this._prices[idx]}!`
      } else {
        console.log('Error')
      }
    },
  }

// Setting meals' name with corresponding prices | Project extension
menu.meals = ['British Sheperd\'s Pie', 'Spanish Seafood Paella', 'Japanese Tonkatsu Ramen', 'Italian Pesto Penne Pasta', 'Chinese Thunder Tea Rice', 'Indian Mushroom Briyani','Khmer Grilled Pork Rice', 'Thai Basil Fried Rice', 'Malaysian Fruit Rojak Salad', 'Greek Traditional Salad'];
menu.prices = [11.99, 12.99, 9.99, 8.99, 8.99, 7.99, 6.99, 6.99, 6.99, 7.99];

// Test functions:
console.log(menu._meals); // Should print array above if typeof is true otherwise will break .push method upon invalid typeof
console.log(menu._prices); // Should print array above if typeof is true otherwise will break .push method upon invalid typeof
console.log(menu.todaysSpecial); // Should print randomize Today's Special of corresponding meal and price by index