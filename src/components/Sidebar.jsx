import ProgressDots from "./Progress";

export default function Sidebar({ step, currentStep, totalSteps }) {
  return (
    <>
      <div className="mt-12">
        <div className="text-center mb-2">
          <step.icon className="w-20 h-auto text-text-light mx-auto" />
        </div>
        <span className="text-summary text-text-light">Paso {currentStep + 1}</span>
        <h2 className="text-subtitle font-bold text-text-light">{step.description}</h2>
        <p className="text-summary text-text-light mt-2">{step.instructions}</p>
      </div>

      <ProgressDots total={totalSteps} currentStep={currentStep} />
    </>
  );
}
