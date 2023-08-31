import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemon";
import StatsBarList from "../components/pokemonDetail/StatsBarList";
import { bgStylePokemonType } from "../shared/pokemon";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="flex bg-red-400/40 justify-center items-center px-2">
      <article className="bg-white/80 capitalize w-[min(100%,_400px)] py-2 shadow-md shadow-black/20 mt-6">
        <Link
          to={"/pokedex"}
          className="bg-red-500 font-semibold border-[1px] border-red-900 px-4 ml-2 hover:bg-red-600 hover:text-white rounded-md"
        >
          Back
        </Link>
        <header
          className={`bg-black/30 h-[55px] relative mt-1 ${
            bgStylePokemonType[pokemonData?.types[0]]
          }`}
        >
          <div
            className={`flex justify-center absolute left-1/2 -translate-x-1/2 -top-7 h-[75px] aspect-square`}
          >
            <img
              className="h-full w-full object-contain"
              src={
                pokemonData?.image
                  ? pokemonData?.image
                  : pokemonData?.backupImage
              }
              alt=""
            />
          </div>
        </header>
        <section className="text-center">
          <span className="font-semibold text-xl">#{pokemonData?.id}</span>
          <h2 className="text-xl font-bold">{pokemonData?.name}</h2>
          <section className="flex gap-2 justify-center mt-3">
            <h4 className="font-semibold">
              <span className="grid text-xs">Weight</span> {pokemonData?.weight}
            </h4>
            <h4 className="font-semibold">
              <span className="grid text-xs">Height</span> {pokemonData?.height}
            </h4>
          </section>

          <section className="grid px-1 float-right justify-end gap-3">
            <h2 className="col-span-2 font-semibold">Types</h2>
            <span
              className={`p-1 px-[10px] rounded-md ${
                bgStylePokemonType[pokemonData?.types[0]]
              }`}
            >
              {" "}
              {pokemonData?.types[0]}{" "}
            </span>
            <span
              className={`rounded-md p-1 ${
                bgStylePokemonType[pokemonData?.types[1]]
              }`}
            >
              {pokemonData?.types[1]}{" "}
            </span>
          </section>
          <div className="grid mr-2 justify-start mt-1 gap-2 px-1">
            <h2 className="col-span-2 font-semibold">Abilities</h2>
            <span className="bg-black/10 border-[1px] border-slate-500/30 rounded-md p-1 text-sm">
              {pokemonData?.abilities[0]}{" "}
            </span>
            <span className="bg-black/10 border-[1px] border-slate-500/30 rounded-md p-1 text-sm">{`${
              pokemonData?.abilities[1] ? pokemonData?.abilities[1] : "N/A"
            }`}</span>
          </div>

          <StatsBarList stats={pokemonData?.stats} />
        </section>
      </article>
    </main>
  );
};
export default PokemonDetail;
