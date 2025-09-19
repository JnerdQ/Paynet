import { RiCheckboxCircleFill } from "react-icons/ri";
import { TbCircleNumber3Filled } from "react-icons/tb";
import GeneralForm from "./GeneralForm";
import LiquidacionForm from "./LiquidacionForm";
import MetodoPago from "./MetodoPago";






function FormSection({ children }) {
  const isPagoComponent = children.type === MetodoPago;

  /* Verificar si el componente es Pago para ocultar el borde izquierdo */
  return (
    <div className={`h-full ml-3 mb-2 ${isPagoComponent ? '' : 'border-l-2 border-gray-700'}`}>
      {children}
    </div>
  );
} 

function Form({ children, title }) {
  const isPagoComponent = children.type === MetodoPago;
  
  return (
    <>
      <FormsSubtitles title={title} isPagoComponent={isPagoComponent} />
      <FormSection>{children}</FormSection>
    </>
  );
}

function FormsSubtitles({ title, isPagoComponent }) {
  return (
    <div className="flex items-center space-x-2 mb-4 text-black">
      {/* Verificar si el componente es Pago para mostrar el ícono correspondiente */}
      {isPagoComponent ? <TbCircleNumber3Filled size={24} color="#0047AB" /> :
      <>
        <RiCheckboxCircleFill size={24} color="#0047AB" />
        <h2>{title}</h2>
      </>
      }
    </div>
  );
}

function MainSection() {
  return (
    <>
      {/* Main incluido Formulario y  titulo Liquidaciones */}
      <div className=" mx-10 my-2">
        <h1>Liquidaciones de pines</h1>
        {/* Separador entre secciones */}
        <hr className="border-t-2 border-gray-300 my-2" />

        {/* Seccion de los formularios */}
        <section className="justify-center items-center mx-96 p-5">
          {/* Contenedor de los subtitulos con sus formularios */}
          <Form title={"Información General"}>
            <GeneralForm />
          </Form>
          <Form title={"Liquidación"}>
            <LiquidacionForm />
          </Form>
          <Form title={"Pago"}>
            <MetodoPago />
          </Form>
        </section>
      </div>
    </>
  );
}

export default MainSection;
