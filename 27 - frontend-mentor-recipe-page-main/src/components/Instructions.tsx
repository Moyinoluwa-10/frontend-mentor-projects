const Instructions = () => {
  return (
    <section className="mb-8 px-5 sm:px-0">
      <h2 className="font-young-serif text-2xl font-bold text-nutmeg mb-4">
        Instructions
      </h2>
      <ol className="marker:text-nutmeg list-decimal font-bold list-outside pl-5 flex flex-col gap-3 mb-8">
        <li>
          Beat the eggs:{" "}
          <span className="font-normal">
            In a bowl, beat the eggs with a pinch of salt and pepper until they
            are well mixed. You can add a tablespoon of water or milk for a
            fluffier texture.
          </span>
        </li>
        <li>
          Heat the pan:{" "}
          <span className="font-normal">
            Place a non-stick frying pan over medium heat and add butter or oil.
          </span>
        </li>
        <li>
          Cook the omelette:{" "}
          <span className="font-normal">
            Once the butter is melted and bubbling, pour in the eggs. Tilt the
            pan to ensure the eggs evenly coat the surface.
          </span>
        </li>
        <li>
          Add fillings (optional):{" "}
          <span className="font-normal">
            When the eggs begin to set at the edges but are still slightly runny
            in the middle, sprinkle your chosen fillings over one half of the
            omelette.
          </span>
        </li>
        <li>
          Fold and serve:{" "}
          <span className="font-normal">
            As the omelette continues to cook, carefully lift one edge and fold
            it over the fillings. Let it cook for another minute, then slide it
            onto a plate.
          </span>
        </li>
        <li>
          Enjoy:{" "}
          <span className="font-normal">
            Serve hot, with additional salt and pepper if needed.
          </span>
        </li>
      </ol>
      <hr />
    </section>
  );
};

export default Instructions;
