import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
      })
    );
  };
  const buttonStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    padding: "0.5rem 1rem",
    backgroundColor: hover ? "#6b21a8" : "#7c3aed",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  };

  return (
    <div className="flex flex-col h-full rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-200 bg-white">
      <div className="p-4 flex-1">
        <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={product?.thumbnail}
            alt={product?.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          />
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">
          {product.title}
        </h3>
        <p className="text-2xl font-bold text-green-600 mb-2">
          ₹{product.price}
        </p>
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
      </div>

      <div className="p-4 pt-0">
        <button
          style={buttonStyle}
          onClick={handleAddToCart}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
