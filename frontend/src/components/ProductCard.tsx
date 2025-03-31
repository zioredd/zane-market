import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      key={product.id}
      className="group border border-gray-100 rounded-lg p-4"
    >
      <div className="overflow-hidden rounded-md">
        <img
          src={product.picture}
          alt={product.name}
          className="h-40 w-full object-cover rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Product details */}
      <h3 className="font-medium text-gray-800 mb-1 line-clamp-2">
        {product.name}
      </h3>
      <p className="text-gray-500 text-sm mb-2">
        {product.stock} ({product.stock} review)
      </p>
      <p className="font-bold text-gray-900">${product.price}</p>
    </div>
  );
};

export default ProductCard;
