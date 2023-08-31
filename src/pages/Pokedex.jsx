import { useState } from "react";
import PokedexList from "../components/pokedex/PokedexList";
import usePokedex from "../hooks/usePokedex";
import { paginateData } from "../utils/pagination";
import Pagination from "../components/pokedex/Pagination";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/trainer.slices";

const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    name,
    handleChange,
    setPokemonName,
    setPokemonType,
    pokemonByName,
    pokemonName,
    pokemonType,
    types,
  } = usePokedex();

  const { itemsCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    pokemonByName,
    currentPage
  );

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <main>
      <button
        onClick={handleLogout}
        className="flex justify-center border-[2px] cursor-pointer border-red-800 items-center m-2 h-[25px] gap-2 py-3 px-3 font-semibold hover:bg-red-700 hover:text-white aspect-square rounded-full bg-red-500"
      >
        {" "}
        Logout <i className="bx bx-power-off"></i>
      </button>
      <section>
        <p className="font-semibold text-center mt-2">
          <span className="font-bold text-red-600 text-xl">Welcome {name}</span>
          , here you can find your favorite pokemon
        </p>
        <form className="grid justify-center gap-4 mt-3 sm:flex">
          <div>
            <input
              className="bg-black/10 text-center px-3 py-1 rounded-md"
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="Search pokemon..."
              type="text"
            />
          </div>

          <select
            className="bg-black/10 px-3 py-1 capitalize rounded-md"
            value={pokemonType}
            onChange={handleChange(setPokemonType)}
          >
            <option value="">All pokemons</option>
            {types?.map((type) => (
              <option key={type.name}>{type.name}</option>
            ))}
          </select>
        </form>
      </section>
      <PokedexList pokemons={itemsCurrentPage} />
      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </main>
  );
};
export default Pokedex;
