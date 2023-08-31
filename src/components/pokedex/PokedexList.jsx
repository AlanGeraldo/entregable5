import PokedexCard from "./PokedexCard";

const PokedexList = ({ pokemons }) => {
  return (
    <section className="grid px-5 py-5 mt-3 gap-4 grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))]">
      {pokemons.map((pokemon) => (
        <PokedexCard key={pokemon.url} pokemonUrl={pokemon.url} />
      ))}
    </section>
  );
};
export default PokedexList;
