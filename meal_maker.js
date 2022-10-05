const menu = {
    _meals: [],
    _prices: [],
    set meals(mealToCheck) {
      mealToCheck.forEach(function(meal){
        if (typeof meal === 'string') {
          return menu._meals.push(meal);
        } else {
          console.log('Erorr: Please input words only!');
        }
      });
    },
    set prices(priceToCheck) {
      priceToCheck.forEach(function(price){
        if (typeof price === 'number') {
          return menu._prices.push(price);
        } else {
          console.log('Error: Please input numbers only!');
        }
      });
    },
    get todaysSpecial() {
      let idx = Math.floor(Math.random() * this._meals.length);
      if (this._meals && this._prices) {
        return `Today's Special is ${this._meals[idx]} for ${this._prices[idx]}!`
      } else {
        console.log('Error')
      }
    },
  }
  menu.meals = ['British Sheperd\'s Pie', 'Spanish Seafood Paella', 'Japanese Tonkatsu Ramen', 'Italian Pesto Penne Pasta', 'Chinese Thunder Tea Rice', 'Indian Mushroom Briyani','Khmer Grilled Pork Rice', 'Thai Basil Fried Rice', 'Malaysian Fruit Rojak Salad', 'Greek Traditional Salad'];
  menu.prices = [11.99, 12.99, 9.99, 8.99, 8.99, 7.99, 6.99, 6.99, 6.99, 7.99];
  //console.log(menu._meals);
  //console.log(menu._prices);
  console.log(menu.todaysSpecial);