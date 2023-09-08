import Button from "../components/Button";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about_us"
      className="flex justify-between
      items-center max-lg:flex-col 
      gap-10 w-full max-container">
      <div className="flex flex-1 
      flex-col">
        <h2
          className="font-palnquin 
          text-4xl capitalize 
          font-bold lg:max-w-lg">
          We provide you
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          This is a dummy content this is a dummy content this is a dummy
          content this is a dummy content this is a dummy content
        </p>
        <p
          className="mt-6 lg:max-w-lg 
          info-text">
          content this is a dummy content
        </p>
        <div className="mt-11">
          <Button label="Shop now" />
        </div>
      </div>
      <div
          className="flex-1 flex 
          justify-center items-center">
          <img
            src={shoe8}
            alt="shoe8"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
    </section>
  );
};

export default SuperQuality;
