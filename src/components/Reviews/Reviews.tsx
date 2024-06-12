import ReviewIcon from "../../assets/review-icon.svg";
import Circle from "../../assets/circle.svg";
import LittleCircle from "../../assets/little-circle-reviews.svg";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="relative min-h-screen p-20 flex flex-col justify-center items-center md:items-start gap-16 z-10 bg-white">
      <h1 className="text-5xl md:text-6xl uppercase font-semibold">Reviews</h1>

      <img src={ReviewIcon} alt="Review Icon" className="z-20" />
      <p className="text-lg z-20 text-center md:text-start">
        Este es un simple texto de relleno solo esta para rellenar, y <br />{" "}
        mostrar el lugar donde iria un texto real de la pagina <br /> cuando
        este hecha en su totalidad
      </p>

      <span className="text-lg z-20">Matias Sosa</span>
      <img src={Circle} className="hidden md:block absolute top-0 left-0 z-5" />
      <img
        src={LittleCircle}
        className="hidden md:block absolute bottom-0 right-0 z-5"
      />
    </div>
  );
};

export default Reviews;
