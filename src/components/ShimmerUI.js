import ShimmerCard from "./ShimmerCard";

const ShimmerUI = () => {
  return (
    <div className="shimmer-container">
      {Array(12)
        .fill("")
        .map((_, i) => (
          <ShimmerCard key={i} />
        ))}
    </div>
  );
};

export default ShimmerUI;
