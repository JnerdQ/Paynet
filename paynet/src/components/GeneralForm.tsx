
function GeneralForm() {
  return (
    <form className="p-6 space-y-6">
      {/* Primera fila */}
      <div className="grid grid-cols-3 gap-7">
        <div className="bg-gray-50 rounded-md">
          <label className="block text-xs text-gray-600 ml-2 mt-1">Placa</label>
          <input  
            type="text"
            placeholder="ABC123"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-700 p-2"
          />
        </div>

        <div className="bg-gray-50 rounded-md">
          <label className="block text-xs text-gray-600 ml-2 mt-1">
            Confirmación de placa
          </label>
          <input
            type="text"
            placeholder="ABC123"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-700 p-2"
          />
        </div>

        <div className="bg-gray-50 rounded-md">
          <label className="block text-xs text-gray-600 ml-2 mt-1">Modelo</label>
          <select className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-700 p-2">
            <option>Modelos 123</option>
            <option>Modelo 2024</option>
            <option>Modelo 2025</option>
          </select>
        </div>
      </div>

      {/* Segunda fila */}
      <div className="grid grid-cols-2 gap-10">
       <div className="bg-gray-50 rounded-md">
          <label className="block text-xs text-gray-600 ml-2 mt-1">Tipo de Vehiculo</label>
          <select className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-700 p-2">
            <option>Particular</option>
            <option>Servicio público</option>
            <option>Diplomático </option>
          </select>
        </div>

        <div>
          <label className="block text-xs text-gray-600">Tipo de servicio</label>
          <select className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-700 p-2">
            <option>Revisión TM</option>
            <option>Mantenimiento</option>
            <option>Otro</option>
          </select>
        </div>
      </div>

      {/* Radio buttons */}
      <div>
        <p className="text-gray-700 font-medium mb-2">Forma de pago</p>
        <div className="flex items-center space-x-6">
          <label className="flex items-center space-x-2">
            <input type="radio" name="pago" defaultChecked className="h-4 w-4" />
            <span>Contado</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="pago" className="h-4 w-4" />
            <span>Tío Paco</span>
          </label>
        </div>
      </div>

      {/* Botón */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-gray-300 text-gray-600 px-6 py-2 rounded-md hover:bg-gray-400"
        >
          Consultar
        </button>
      </div>
    </form>
  );
}

export default GeneralForm;