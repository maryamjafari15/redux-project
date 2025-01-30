import { type ReactNode } from "react"

type ProductListProps= {
  children: ReactNode
}


const ProductList = ({children }: ProductListProps) => {
  return (
    <div className="product-list">
      <div className="product-items">
        {children}
      </div>
    </div>
  )
}

export default ProductList