const formatter = new Intl.NumberFormat("kz-KZ", {
  style: "currency",
  maximumFractionDigits: 0,
  currency: "KZT",
  currencyDisplay: "narrowSymbol",
});

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card w-100">
      <img
        src={product.image}
        style={{ maxHeight: 200, objectFit: "contain" }}
      />

      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.brand + " " + product.model}</h6>
      </div>

      <p className="card-text">{formatter.format(product.price)}</p>

      <button
        className="btn btn-success mt-auto align-self-end"
        onClick={() => {
          addToCart({ ...product, quantity: 1 });
        }}
      >
        В корзину
      </button>
    </div>
  );
}
