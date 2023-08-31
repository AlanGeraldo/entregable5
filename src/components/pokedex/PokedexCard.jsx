import { useEffect, useState } from "react";
import { getPokemonByUrl, joinPokemonTypes } from "../../services/pokemon";
import StatsList from "./StatsList";
import {
  bgStylePokemonType,
  borderPokemonType,
  textStylePokemon,
} from "../../shared/pokemon";
import { Link } from "react-router-dom";

const PokedexCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    getPokemonByUrl(pokemonUrl)
      .then((data) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Link
      to={`/pokedex/${pokemonInfo?.id}`}
      className={`text-center font-semibold capitalize rounded-md ${
        borderPokemonType[pokemonInfo?.types[0]]
      }`}
    >
      <header
        className={`h-[80px] relative mb-8 ${
          bgStylePokemonType[pokemonInfo?.types[0]]
        }`}
      >
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 h-[70px] aspect-square">
          <img
            className="h-full w-full object-contain"
            src={`${
              pokemonInfo?.image ? pokemonInfo?.image : pokemonInfo?.backupImage
            }`}
            alt=""
          />
        </div>
      </header>
      <hr />
      <section>
        <h2
          className={`font-bold text-lg ${
            textStylePokemon[pokemonInfo?.types[0]]
          }`}
        >
          {pokemonInfo?.name}
        </h2>
        <h3 className="text-sm mb-2">
          {" "}
          {joinPokemonTypes(pokemonInfo?.types)}{" "}
        </h3>
        <StatsList pokemonInfo={pokemonInfo} stats={pokemonInfo?.stats} />
      </section>
    </Link>
  );
};
export default PokedexCard;
