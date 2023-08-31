import { textStylePokemon } from "../../shared/pokemon";

const StatsList = ({ stats, pokemonInfo }) => {
  return (
    <ul className="grid  gap-2 p-2 grid-cols-3 mb-2 text-sm">
      {stats?.map((stat) => (
        <li key={stat.name}>
          <h4 className="capitalize line-clamp-1"> {stat.name} </h4>
          <span
            className={`font-bold ${textStylePokemon[pokemonInfo?.types[0]]}`}
          >
            {" "}
            {stat.value}{" "}
          </span>
        </li>
      ))}
    </ul>
  );
};
export default StatsList;
