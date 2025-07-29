import { useSelector } from "react-redux"
import { ShoppingCart } from "lucide-react"

const Cart = () => {
  const totalCount = useSelector((state) => state.cart.totalCount)

  return (
    <div className="relative inline-flex items-center">
      <ShoppingCart className="w-8 h-8 text-gray-700" />
      {totalCount > 0 && (
        <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">
          {totalCount}
        </div>
      )}
    </div>
  )
}

export default Cart
