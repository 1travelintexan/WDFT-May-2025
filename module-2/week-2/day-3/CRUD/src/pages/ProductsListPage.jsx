import { Link } from "react-router-dom";

export const ProductsListPage = ({ allProducts }) => {
  return (
    <div>
      <h2>Products:</h2>
      <section className="products-container">
        {allProducts.map((oneProduct) => {
          return (
            <div key={oneProduct.id} className="product-card">
              <img src={oneProduct.thumbnail} />
              <Link to={`/product-detail/${oneProduct.id}`}>
                <h3>{oneProduct.title}</h3>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};
