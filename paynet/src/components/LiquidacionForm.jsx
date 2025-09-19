function LiquidacionForm() {
  return (
    <>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-14">
          <form>
            <h2 className="mb-8">Informacion del cliente</h2>
            <div className="bg-gray-50 rounded-md mb-6">
              <label className="block text-xs text-gray-600 ml-2 mt-1">
                Tipo de documento
              </label>
              <select className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-700 p-2">
                <option>Cédula de ciudadania</option>
                <option>Cédula de Extranjería</option>
                <option>Número de Identificación Tributaria (NIT)</option>
              </select>
            </div>
            <div className="bg-gray-50 rounded-md mb-6">
              <label className="block text-xs text-gray-600 ml-2 mt-1">
                Número de documento
              </label>
              <input
                type="text"
                placeholder="1987654321"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-700 p-2"
              />
            </div>
            <div className="bg-gray-50 rounded-md mb-6">
              <label className="block text-xs text-gray-600 ml-2 mt-1">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Jonh"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-700 p-2"
              />
            </div>
            <div className="bg-gray-50 rounded-md mb-6">
              <label className="block text-xs text-gray-600 ml-2 mt-1">
                Apellido
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-700 p-2"
              />
            </div>
            <div className="bg-gray-50 rounded-md mb-6">
              <label className="block text-xs text-gray-600 ml-2 mt-1">
                Dirección
              </label>
              <input
                type="text"
                placeholder="Calle 123"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-700 p-2"
              />
            </div>
            <div className="bg-gray-50 rounded-md mb-6">
              <label className="block text-xs text-gray-600 ml-2 mt-1">
                Teléfono
              </label>
              <input
                type="text"
                placeholder="315 539 5443"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-700 p-2"
              />
            </div>
            <div className="bg-gray-50 rounded-md mb-6">
              <label className="block text-xs text-gray-600 ml-2 mt-1">
                Correo
              </label>
              <input
                type="email"
                placeholder="email@gmail.com"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-gray-700 p-2"
              />
            </div>
          </form>
          <LiquidationTable />
        </div>
        {/* Botón */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-gray-300 text-gray-600 px-6 py-2 rounded-md hover:bg-gray-400"
          >
            Continuar
          </button>
        </div>
      </div>
    </>
  );
}

function LiquidationTable() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg h-fit border border-gray-300 w-full">
      <h2 className="text-lg font-medium text-gray-800 mb-4">
        Valor de liquidación
      </h2>
      <hr className="border-t border-gray-300 pt-3 mt-4 w-full" />

      <div className="space-y-1">
        <div className="flex justify-between">
          <span className="text-gray-600">ANSV</span>
          <span className="text-gray-800">$7000</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Recaudo</span>
          <span className="text-gray-800">$1.0591</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">SICOV</span>
          <span className="text-gray-800">$99.936</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">RUNT</span>
          <span className="text-gray-800">15.900</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Valor servicio</span>
          <span className="text-gray-800">$221.943</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">IVA Servicio</span>
          <span className="text-gray-800">$42.169,17</span>
        </div>

        <hr className="border-t border-gray-300 pt-3 mt-4 w-full" />

        <div className="flex justify-between">
          <span className="text-gray-800 font-semibold">Total</span>
          <span className="text-gray-800 font-bold text-lg">$ 925.764,70</span>
        </div>
      </div>
    </div>
  );
}
export default LiquidacionForm;
