export default function CardOption({ name, value, checked }) {
  return (
    <label
      className={`flex items-center gap-4 p-4 rounded-lg border border-gray-200 cursor-pointer transition-colors ${
        checked ? "bg-focus" : "bg-cards"
      }`}
    >
      <input type="radio" name={name} value={value} checked={checked}/>
      <div className="flex-1">
        <span className="font-bold">Title</span>
        <p className="text-sm mt-1">Description</p>
      </div>
    </label>
  );
}
