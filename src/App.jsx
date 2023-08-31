import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonDetail from "./pages/PokemonDetail";
import PrivateRouts from "./components/auth/PrivateRouts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<PrivateRouts />}>
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:pokemonId" element={<PokemonDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
