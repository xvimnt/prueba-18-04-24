interface Props {
  categories: string[];
  filter: string;
  setFilter: (filter: string) => void;
}

export const Filters = ({ categories, filter, setFilter }: Props) => {
  return (
    <div className="w-96 p-4 h-fit bg-teal-200 rounded-2xl">
      <div className="text-black text-base font-semibold">Filtros</div>
      {
        // radio buttons
        categories.map((category) => (
          <div key={category} className="flex items-center gap-2">
            <input
              type="radio"
              name="category"
              id={category}
              className="w-4 h-4"
              checked={filter === category}
              onChange={() => setFilter(category)}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))
      }
    </div>
  );
};
