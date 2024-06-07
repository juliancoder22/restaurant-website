import dishImg from "../../assets/dish.png";
import leafImg from "../../assets/leaf.svg";
import rocketImg from "../../assets/rocket.svg";
import headphonesImg from "../../assets/headphones.svg";

const Hero = () => {
  return (
    <div className="bg-white h-screen flex justify-between flex-col lg:flex-row">
      <div className="flex w-full flex-col justify-center p-10 lg:w-2/4 lg:p-20">
        <h1 className="text-5xl text-center font-bold leading-normal lg:text-start lg:text-6xl lg:leading-relaxed">
          Comida casera,
          <br /> saludable y <br />
          <span className="text-teal-500">vegana.</span>
        </h1>
        <div className="flex mt-10 gap-6">
          <button className="bg-teal-500 h-10 w-40 rounded font-semibold text-white">
            Ver menu
          </button>
          <button className="bg-black h-10 w-40 font-semibold text-white rounded">
            Local Cerca
          </button>
        </div>
        <div className="flex mt-20">
          <div className="flex flex-col justify-center items-center pr-8 border-r-2 border-black">
            <img src={leafImg} alt="" className="w-8" />
            <span className="mt-4 font-bold">Fresco</span>
          </div>

          <div className="flex flex-col justify-center items-center px-8 border-r-2 border-black">
            <img src={rocketImg} alt="" className="w-8" />
            <span className="mt-4 font-bold">Rapido</span>
          </div>

          <div className="flex flex-col justify-center items-center pl-8">
            <img src={headphonesImg} alt="" className="w-8" />
            <span className="mt-4 font-bold">Soporte</span>
          </div>
        </div>
      </div>
      <img
        src={dishImg}
        alt="korean dish"
        className="w-full p-8 lg:w-2/4 lg:p-0"
      />
    </div>
  );
};

export default Hero;
