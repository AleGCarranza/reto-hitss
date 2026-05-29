import CardOption from "../CardOption";
export default function StepOne({title, description}) {
  return (
    <div className="flex flex-col gap-6">
      <CardOption name="plan" value="1" checked={true} title={title} description={description} />
      <CardOption name="plan" value="2" checked={false} title={title} description={description} />
      <CardOption name="plan" value="3" checked={false} title={title} description={description} />
    </div>
  );
}
