export default function StepFour() {
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-1 gap-4"
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
       
      </form>
    
    </>
  );
}
