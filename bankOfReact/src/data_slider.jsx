const Slider = ({ min, max, step, label, type, id, value, onChange }) => {
  return type === "money" ? (
    <div className="w-52 md:w-96">
      <h2 className="mb-2 text-sm font-medium text-zinc-700">{label}</h2>
      <p className="mb-2 text-lg font-bold">₹ {value}</p>
      <div className="w-full too52 md:w-96" data-tip={value}>
        <input
          onChange={onChange}
          type="range"
          min={min}
          max={max}
          step={step}
          className="mb-1 range range-accent"
          id={id}
          value={value}
        />
      </div>
      <div className="flex justify-between">
        <span className="text-xs text-zinc-600">₹ {min}</span>
        <span className="text-xs text-zinc-600">₹ {max}</span>
      </div>
    </div>
  ) : (
    <div className="w-52 md:w-96">
      <h2 className="mb-2 text-sm font-medium text-zinc-700">{label}</h2>
      <p className="mb-2 text-lg font-bold">{value} %</p>
      <div className="w-full too52 md:w-96" data-tip={value}>
        <input
          onChange={onChange}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          className="mb-1 range range-error"
        />
      </div>
      <div className="flex justify-between">
        <span className="text-xs text-zinc-600">{min} %</span>
        <span className="text-xs text-zinc-600">{max} %</span>
      </div>
    </div>
  );
};
export default Slider;
