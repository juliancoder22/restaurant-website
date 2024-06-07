import yogurtDish from "../../assets/yogurt.svg";
import soupDish from "../../assets/soup.svg";
import circle1 from "../../assets/specialties-circle-1.svg";
import circle2 from "../../assets/specialties-circle-2.svg";

const Specialties = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="flex flex-col lg:flex-row lg:justify-center">
        <div className="flex flex-col lg:w-2/4 justify-center relative p-10 lg:p-20 xl:p-40">
          <img src={circle1} className="w-20 absolute left-0" />
          <h1 className="text-6xl uppercase font-normal">Especialidades</h1>
          <span className="text-teal-500 text-lg font-semibold mt-10 lg:mt-24">
            Postres
          </span>
          <h2 className="text-5xl font-semibold mt-5 lg:mt-10">
            Yogurt Griego con <br />
            Semillas y Fresas
          </h2>
          <p className="mt-5 lg:mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut illo,
            aspernatur earum, vel molestias aperiam totam deleniti ipsa a non
            dignissimos veniam cumque praesentium fugit. Iste aliquam incidunt
            maiores culpa.
          </p>
          <div className="flex items-center lg:justify-start mt-5 lg:mt-10 gap-5 lg:gap-10">
            <span className="text-xl">$50</span>
            <button className="bg-teal-500 h-10 w-40 rounded-lg font-semibold text-white">
              Encargar
            </button>
          </div>
        </div>
        <img
          src={yogurtDish}
          alt="yogurt"
          className="w-full lg:w-2/4 p-10 lg:p-20 xl:p-36"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
        <img
          src={soupDish}
          alt="soup"
          className="w-full lg:w-2/4 p-10 lg:p-20 xl:p-24"
        />
        <div className="flex flex-col lg:w-2/4 justify-center relative p-10 lg:p-20 xl:p-40">
          <img src={circle2} className="w-20 absolute right-0" />
          <span className="text-teal-500 text-lg font-semibold mt-10 lg:mt-20 ">
            Almuerzos
          </span>
          <h2 className="text-5xl font-semibold mt-5 lg:mt-10">
            Sopa de Mani con <br /> garbanzo
          </h2>
          <p className="mt-5 lg:mt-10 lg:pr-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut illo,
            aspernatur earum, vel molestias aperiam totam deleniti ipsa a non
            dignissimos veniam cumque praesentium fugit. Iste aliquam incidunt
            maiores culpa.
          </p>
          <div className="flex items-center lg:justify-start mt-5 lg:mt-10 gap-5 lg:gap-10">
            <span className="text-xl">$50</span>
            <button className="bg-teal-500 h-10 w-40 rounded-lg font-semibold text-white">
              Encargar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialties;
