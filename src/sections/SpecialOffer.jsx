import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section
      className="flex justify-wrap
    items-center max-xl:flex-col-reverse
    gap-10 max-container"
    >
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
          alt=""
        />
      </div>
      <div
        className="flex flex-1 
      flex-col"
      >
        <h2
          className="font-palnquin 
          text-4xl capitalize 
          font-bold lg:max-w-lg"
        >
          <br />
          <span className="text-coral-red"> Special</span>
          <span className="text-coral-red"> Offer</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          This is a dummy content this is a dummy content this is a dummy
          content this is a dummy content this is a dummy content
        </p>
        <p
          className="mt-6 lg:max-w-lg 
          info-text"
        >
          content this is a dummy content This is a dummy content this is a
          dummy content this is a dummy content this is a dummy content this
        </p>
        <div className="mt-11 flex
        flex-wrap gap-4">
          <Button label="View Details"
          iconURL = {arrowRight} />
          <Button
          label="Learn more"
          backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
