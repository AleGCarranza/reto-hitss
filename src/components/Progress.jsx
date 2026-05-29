export default function Progress({ total, currentStep }) {
  const dots = [];

  for (let i = 0; i < total; i++) {
    const isActive = i <= currentStep;

    dots.push(
      <span
        key={i}
        className={`w-3 h-3 rounded-full ${isActive ? "bg-selected" : "bg-gray-200"}`}
      />
    );

    if (i < total - 1) {
      dots.push(
        <span
          key={`line-${i}`}
          className={`w-6 h-0.5 ${i < currentStep ? "bg-selected" : "bg-gray-200"}`}
        />
      );
    }
  }

  return <div className="flex items-center mt-6">{dots}</div>;
}
