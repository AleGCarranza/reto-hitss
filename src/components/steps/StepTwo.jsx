export default function StepTwo() {
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-2 gap-4"
      >
        <label className="flex flex-col gap-1">
          <span>Nombre</span>
          <input
            type="text"
            placeholder="Lorem Ipsum"
            className="border border-gray-300 p-2 rounded-lg"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Nombre</span>
          <input
            type="text"
            placeholder="Lorem Ipsum"
            className="border border-gray-300 p-2 rounded-lg"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Nombre</span>
          <input
            type="text"
            placeholder="Lorem Ipsum"
            className="border border-gray-300 p-2 rounded-lg"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Nombre</span>
          <input
            type="text"
            placeholder="Lorem Ipsum"
            className="border border-gray-300 p-2 rounded-lg"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Nombre</span>
          <input
            type="text"
            placeholder="Lorem Ipsum"
            className="border border-gray-300 p-2 rounded-lg"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Fecha Nacimiento</span>
          <input
            type="date"
            placeholder="Lorem Ipsum"
            className="border border-gray-300 p-2 rounded-lg"
          />
        </label>
      </form>
      <h3>Domicilio</h3>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-2 gap-4"
      >
        <label className="flex flex-col gap-1">
          <span>Fecha Nacimiento</span>
          <input
            type="text"
            placeholder="Lorem Ipsum"
            className="border border-gray-300 p-2 rounded-lg"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Fecha Nacimiento</span>
          <input
            type="text"
            placeholder="Lorem Ipsum"
            className="border border-gray-300 p-2 rounded-lg"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Fecha Nacimiento</span>
          <select
            name="dropdown"
            id="12"
            className="border border-gray-300 p-2 rounded-lg"
          >
            <option value="1">Uno</option>
            <option value="2">Dos</option>
            <option value="3">Tres</option>
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span>Fecha Nacimiento</span>
          <input
            type="date"
            placeholder="Lorem Ipsum"
            className="border border-gray-300 p-2 rounded-lg"
          />
        </label>
      </form>
    </>
  );
}
