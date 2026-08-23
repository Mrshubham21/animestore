const SizeSelector = ({
  sizes,
  selectedSize,
  setSelectedSize,
}) => {
  return (
    <div className="size-selector">
      <h4>Select Size</h4>

      <div className="sizes">
        {sizes?.map((size) => (
          <button
            key={size}
            className={
              selectedSize === size ? "active" : ""
            }
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;