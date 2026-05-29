import CardOption from "../CardOption";
export default function StepOne() {
  return (
    <div className="flex flex-col gap-6">
      <CardOption name="opción 1" value="1" checked={true} />
      <CardOption name="opción 2" value="2" checked={false} />
      <CardOption name="opción 3" value="3" checked={false} />
    </div>
  );
}
