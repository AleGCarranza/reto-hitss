import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  return (
    <main className="max-w-[1440px] mx-auto mt-[42px] px-4 lg:px-0">
      <div className="lg:grid lg:grid-cols-12">
        <div className="lg:col-start-2 lg:col-span-10 flex flex-col items-center gap-6 py-12">
          <h2 className="text-title font-bold text-main">Has finalizado tu proceso exitosamente</h2>

          <div className="bg-secondary rounded-2xl shadow-md p-8 lg:p-12 text-center max-w-2xl w-full">
            <h3 className="text-subtitle font-bold text-text-main">Bienvenido a tu nuevo Servicio de Claro</h3>
            <p className="text-base text-text-main mt-4">
              Enviaremos a tu correo electrónico una copia del contrato que acabas
              de diligenciar y los pasos a seguir para la activación de tu plan.
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 px-6 py-2 rounded-full bg-actions-secondary text-text-light"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
