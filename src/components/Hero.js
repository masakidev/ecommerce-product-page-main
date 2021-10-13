import imgProduct from "../images/image-product-1.jpg";

const Hero = () => {
  return (
    <div>
      <img src={imgProduct} alt="" />
      <div className="px-6 py-4">
        <h2 className="text-sm font-bold uppercase mb-2 text-orange">
          Sneaker Company
        </h2>
        <h1 className="text-2xl font-bold mb-2">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-base">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </div>
    </div>
  );
};

export default Hero;
