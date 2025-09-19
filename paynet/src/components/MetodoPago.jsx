import { useState } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdStore } from "react-icons/md";
import PaymentIcon from "../assets/payment.svg?react";






function MetodoPago() {
  const [metodo, setMetodo] = useState("PSE");

  const opciones = [
    {
      id: "Efectivo",
      label: "Efectivo",
      icon: (
        <div className="flex items-center justify-center w-9 h-8 rounded-full bg-blue-100">
          <FaMoneyBillWave className="w-6 h-6 text-blue-400" />
        </div>
      ),
    },
    {
      id: "PSE",
      label: "PSE",
      icon: (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100">
          <AiFillDollarCircle className="w-6 h-6 text-blue-400" />
        </div>
      ),
    },
    {
      id: "Corresponsal",
      label: "Corresponsal bancario",
      icon: (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mt-2">
          <MdStore className="w-6 h-6 text-blue-400" />
        </div>
      ),
    },
    {
      id: "Datafono",
      label: "Datáfono",
      icon: (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100">
      <PaymentIcon className="w-6 h-6 text-blue-400" />
    </div>
  ),
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Opciones */}
      <div className="grid grid-cols-4 gap-6">
        {opciones.map((op) => (
          <div
            key={op.id}
            onClick={() => setMetodo(op.id)}
            className={`relative flex flex-col items-center justify-center p-6 rounded-xl border-2 cursor-pointer transition-all h-32
         
              ${
                metodo === op.id
                  ? "border-blue-500 bg-white shadow-sm"
                  : "border-gray-200 bg-gray-50 hover:border-gray-300"
              }`}
          >
            {/* Check de selección */}
            <div
              className={`absolute top-3 right-3 w-5 h-5 rounded-full border flex items-center justify-center
                ${
                  metodo === op.id
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300 bg-transparent"
                }`}
            >
              {metodo === op.id && (
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>

            {/* Ícono */}
            <div className="mb-3">{op.icon}</div>

            {/* Texto */}
            <span
              className={`text-sm font-medium text-center leading-tight ${
                metodo === op.id ? "text-blue-500" : "text-gray-800"
              }`}
            >
              {op.label}
            </span>
          </div>
        ))}
      </div>

      {/* Botones */}
      <div className="flex justify-end gap-4 mt-8">
        <button className="px-8 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50 font-medium">
          Cancelar
        </button>
        <button className="px-8 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium">
          Generar
        </button>
      </div>
    </div>
  );
}

export default MetodoPago;
