# React Redux Toolkit Shopping Cart

A simple React application demonstrating product listing, search/filter, and a shopping cart with state management powered by Redux Toolkit.

## Project Overview

This React application fetches products from a remote API, enables users to search and filter through the list, and add items to a shopping cart. Redux Toolkit handles the application state to minimize boilerplate.

## Tech Stack

- React for building UI components
- Redux Toolkit for state management
- React Redux to connect Redux with React
- JavaScript (ES6+)
- CSS or Tailwind for styling

## Project Structure

src/
├── components/
│ ├── ProductListPage.jsx
│ ├── SearchBar.jsx
│ ├── ProductCard.jsx
│ └── Cart.jsx
├── redux/
│ ├── store.js
│ ├── productSlice.js
│ └── cartSlice.js
├── App.jsx
└── main.jsx

**Components Folder**

- `ProductListPage` – Responsible for displaying the list of products and triggering data fetch
- `SearchBar` – Manages user input to filter the product list
- `ProductCard` – Shows individual product details and an add-to-cart button
- `Cart` – Displays the current cart badge count

**Redux Folder**

- `store` – Configuration of the Redux store, integrating all slices
- `productSlice` – Contains state for products, loading status, errors, and search term
- `cartSlice` – Contains state for items in the shopping cart and total item count

Main entry points:

- `App.jsx` – Root component to render the main product page
- `main.jsx` – store provider and Renders the application into the DOM

## Application Flow

1. **Startup**: The application wraps the root component with the Redux provider, making the store available to all components.
2. **ProductListPage**: On mount, it triggers an action to fetch products from the API. The state transitions from loading to success or error.
3. **UI Update**: When products arrive, they populate the list. If an error occurs, a message is displayed.
4. **Search**: User input in the search bar updates the search term state and filters the displayed products.
5. **Add to Cart**: Clicking the add button dispatches an action that updates the cart state (adding items or incrementing quantity).
6. **Cart Badge**: The cart component listens to the total item count and updates the badge automatically.

## Redux Toolkit Architecture

**Store Configuration**

- A single Redux store holds the complete application state, combining both the product and cart slices.

**Product Slice**

- Manages an array of all products, a filtered subset, loading and error states, and the current search term.
- Uses an asynchronous action to fetch data from the API, automatically handling pending, fulfilled, and rejected cases.
- Synchronous logic filters the product list whenever the search term changes.

**Cart Slice**

- Manages items in the shopping cart and a running total of items.
- Synchronous logic adds new items or increments existing item quantities and updates the total count.

## Component Data Flow

- **ProductListPage** subscribes to product-related state and triggers the fetch action.
- **SearchBar** dispatches updates to the search term, causing the product slice to recalculate the filtered list.
- **ProductCard** dispatches add-to-cart actions with product details.
- **Cart** subscribes to the cart’s total count and displays a badge when there are items.

## Key Benefits of Redux Toolkit

1. **Reduced Boilerplate**: Simplifies store and slice setup.
2. **Safe Mutations**: Uses Immer under the hood for immutable updates with mutable syntax.
3. **Automatic DevTools Integration**: Enables time-travel debugging and action inspection.
4. **Opinionated Best Practices**: Encourages a standardized and maintainable approach by default.

## Getting Started

**Prerequisites**

- Node.js (version 14 or higher)
- npm for package management

**Installation Steps**

1. Clone the repository and navigate to its directory.
2. Install dependencies using npm install.
3. Start the development server.

**Running the Application**

- The app runs locally and listens on port 5173 by default.
