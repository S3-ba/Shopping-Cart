# Shopping Cart Application

A simple React application that allows users to add products to a shopping cart, remove them, and mark them as purchased. Purchased products have a different appearance, making it easy to distinguish them from items that are still to be bought.

---

## Features

1. **Add Products**
   - Users can type the product name in the input field and add it to the shopping cart.
2. **Display Product List**
   - The product list is displayed using the `ProductItem` component.
   - Each product has buttons:
     - **Delete** – removes the product from the cart.
     - **Purchased / Undo** – marks the product as purchased or reverts it back to unpurchased.
3. **Conditional Styling**
   - Purchased products are crossed out and styled differently to visually distinguish them from unpurchased items.

---

## Technologies

- React
- CSS (inline and in components)
- JavaScript (ES6+)

---

## Project Structure

src/
│
├── App.jsx # Main application component managing the cart state
├── productItem.jsx # Component displaying a single product
├── App.css # Additional styles (optional)
└── index.js # Entry point of the application

---

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/YOUR-GITHUB-USERNAME/Shopping-cart.git
cd shopping-cart


Install dependencies:

npm install


Start the application:

npm start


Open in your browser:

http://localhost:3000

Usage

Add a product by typing its name in the input field and clicking Add Product.

Click Purchased to mark a product as purchased (the text will be crossed out).

Click Delete to remove a product from the cart.

Author

Made By: S3-ba
