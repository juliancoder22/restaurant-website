import background from "../../assets/background-form.png";

const Reservation = () => {
  return (
    <div className="flex p-5 justify-center min-h-screen md:justify-end items-center relative md:overflow-hidden md:h-screen">
      <img
        src={background}
        className="absolute w-full top-0 h-full object-cover"
      />
      <form className="flex flex-col items-center justify-center z-10 bg-white rounded-md p-5 md:p-10 gap-5 md:mr-20">
        <div className="flex flex-col gap-3 items-center justify-center">
          <span className="text-teal-500 text-lg">Te Esperamos</span>
          <h2 className="font-medium text-2xl">Reservación</h2>
        </div>

        <input
          type="text"
          placeholder="Nombre"
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="email"
          placeholder="Email"
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="number"
          placeholder="Telefono"
          className="mb-2 p-2 border rounded w-full"
        />
        <div className="flex space-x-2 w-full">
          <div className="flex flex-col w-1/2">
            <label className="text-gray-600 mb-1">Fecha</label>
            <input type="date" className="p-2 border rounded" />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-gray-600 mb-1">Hora</label>
            <input type="time" className="p-2 border rounded" />
          </div>
        </div>
        <input
          type="number"
          placeholder="Cantidad de personas"
          className="mb-2 p-2 border rounded w-full"
          min="1"
          step="1"
        />
        <textarea
          placeholder="Mensaje"
          className="p-2 border rounded w-full h-32"
        ></textarea>

        <button className="bg-teal-500 h-10 w-40 rounded-lg font-semibold text-white self-end">
          Encargar
        </button>
      </form>
    </div>
  );
};

export default Reservation;
