const Hero = () => {
  return (
    <section className="mb-8">
      <img
        src="/image-omelette.jpeg"
        alt="omelette"
        className="sm:rounded-xl mb-10"
      />
      <div className="px-5 sm:px-0">
        <h1 className="text-3xl sm:text-4xl font-bold font-young-serif mb-5 text-dark-charcoal">
          Simple Omelette Recipe
        </h1>
        <p className="mb-6">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <div className="p-5 bg-rose-white rounded-xl">
          <h2 className="text-xl font-bold text-dark-raspberry mb-2">
            Preparation time
          </h2>
          <ul className="marker:text-dark-raspberry list-disc list-outside pl-5 flex flex-col gap-3">
            <li>
              <span className="font-semibold">Total:</span> Approximately 10
              minutes
            </li>
            <li>
              <span className="font-semibold">Preparation:</span> 5 minutes
            </li>
            <li>
              <span className="font-semibold">Cooking:</span> 5 minutes
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
