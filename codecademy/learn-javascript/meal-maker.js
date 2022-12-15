/* eslint-disable accessor-pairs */
/* eslint-disable no-console */

const menu = {
  _meal: '',
  _price: 0,
  get todaysSpecial() {
    const { _meal, _price } = this;
    if (_meal && _price) return `Today's special is ${_meal} for $${_price}!`;
    else return 'Meal or price was not set correctly!';
  },
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') this._meal = mealToCheck;
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') this._price = priceToCheck;
  }
};

menu.meal = '';
menu.price = 0;
console.log(menu.todaysSpecial);
