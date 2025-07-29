import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("https://dummyjson.com/products")
  const data = await response.json()
  return data.products
})

const initialState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  searchTerm: "",
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload

      if (action.payload === "") {
        state.filteredProducts = state.products
      } else {
        state.filteredProducts = state.products.filter((product) =>
          product.title.toLowerCase().includes(action.payload.toLowerCase()),
        )
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
        state.filteredProducts = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { setSearchTerm } = productSlice.actions
export default productSlice.reducer
