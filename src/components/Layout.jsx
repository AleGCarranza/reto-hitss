import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { stepsData } from "../data/steps";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const step = stepsData[currentStep];

  return (
    <main className="max-w-[1440px] mx-auto mt-[42px] px-4 lg:px-0">
      <div className="lg:grid lg:grid-cols-12 flex flex-col min-h-[500px] lg:h-[719px]">
        <div className="lg:col-start-2 lg:col-span-3 bg-primary rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none p-8 flex flex-col justify-between">
          <Sidebar
            step={step}
            currentStep={currentStep}
            totalSteps={stepsData.length}
          />
        </div>
        <div className="lg:col-span-7 bg-secondary rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none p-8">
          Forms
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-12 mt-6 mb-8">
        <div className="lg:col-start-2 lg:col-span-10 flex justify-between">
          {currentStep > 0 ? (
            <button
              onClick={() => setCurrentStep((s) => s - 1)}
              className="px-4 py-2 rounded-full bg-actions-primary text-text-light"
            >
              Regresar
            </button>
          ) : (
            <div />
          )}
          <button
            onClick={() => {
              if (currentStep === stepsData.length - 1) {
                navigate("/success");
              } else {
                setCurrentStep((s) => s + 1);
              }
            }}
            className="px-4 py-2 rounded-full bg-actions-secondary text-text-light"
          >
            {currentStep === stepsData.length - 1 ? "Finalizar" : "Siguiente"}
          </button>
        </div>
      </div>
    </main>
  );
}
