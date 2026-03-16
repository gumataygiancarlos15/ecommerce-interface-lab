class Item {
  #discount = 0.1; // Private property

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  get finalPrice() {
    return this.price - (this.price * this.#discount);
  }
}
// Test: const myItem = new Item("Phone", 500);