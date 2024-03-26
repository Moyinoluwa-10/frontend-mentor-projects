const Nutrition = () => {
  return (
    <section className="px-5 sm:px-0">
      <h2 className="font-young-serif text-2xl font-bold text-nutmeg mb-4">
        Nutrition
      </h2>
      <p className="mb-2">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>

      <table className="w-full ">
        <tr className="border-b">
          <td className="p-5">Calories</td>
          <td className="p-5 text-nutmeg font-bold">277kcal</td>
        </tr>
        <tr className="border-b">
          <td className="p-5">Carbs</td>
          <td className="p-5 text-nutmeg font-bold">0g</td>
        </tr>
        <tr className="border-b">
          <td className="p-5">Protein</td>
          <td className="p-5 text-nutmeg font-bold">20g</td>
        </tr>
        <tr className="">
          <td className="p-5">Fat</td>
          <td className="p-5 text-nutmeg font-bold">22g</td>
        </tr>
      </table>
    </section>
  );
};

export default Nutrition;
