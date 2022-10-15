const menu = {
    _meals: [], // changed from single string to accept array of meals to allow random assignment on Today's Special | project extension
    _prices: [], // changed from single number to accept array of prices to allow random assignment on Today's Special | project extension
    set meals(mealToCheck) {
      mealToCheck.every(function(meal){ // .every method was used instead of .forEach so .push method will stop upon invalid typeof, allowing user to identify error and continue input systematically | project extension
        if (typeof meal === 'string') {
          return menu._meals.push(meal);
        } else {
          console.log('Erorr: Please input words only!');
        }
      });
    },
    set prices(priceToCheck) {
      priceToCheck.every(function(price){ // .every method was used instead of .forEach so .push method will stop upon invalid typeof, allowing user to identify error and continue input systematically | project extension
        if (typeof price === 'number') {
          return menu._prices.push(price);
        } else {
          console.log('Error: Please input numbers only!');
        }
      });
    },
    get todaysSpecial() {
      let idx = Math.floor(Math.random() * this._meals.length); // project extension
      if (this._meals && this._prices) {
        return `Today's Special is ${this._meals[idx]} for ${this._prices[idx]}!`
      } else {
        console.log('Error')
      }
    },
  }
menu.meals = ['British Sheperd\'s Pie', 'Spanish Seafood Paella', 'Japanese Tonkatsu Ramen', 'Italian Pesto Penne Pasta', 'Chinese Thunder Tea Rice', 'Indian Mushroom Briyani','Khmer Grilled Pork Rice', 'Thai Basil Fried Rice', 'Malaysian Fruit Rojak Salad', 'Greek Traditional Salad']; // project extension
menu.prices = [11.99, 12.99, 9.99, 8.99, 8.99, 7.99, 6.99, 6.99, 6.99, 7.99]; // project extension

// Test functions:
console.log(menu._meals); // Should print array above if typeof is true otherwise will break .push method upon invalid typeof
console.log(menu._prices); // Should print array above if typeof is true otherwise will break .push method upon invalid typeof
console.log(menu.todaysSpecial); // Should print randomize Today's Special of corresponding meal and price by index