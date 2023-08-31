import { useDispatch } from "react-redux";
import FooterPokeball from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slices";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubimt = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex");
  };

  return (
    <main className=" min-h-screen font-fire-code grid grid-rows-[1fr_auto]">
      <section className="grid place-items-center text-center">
        <article>
          <div className="mb-4 shadow-sm">
            <img className="px-2 w-[620px]" src="/images/banner.png" alt="" />
          </div>
          <h1 className="text-2xl text-red-700 mt-2  font-bold">
            ¡Hello Trainer!
          </h1>
          <p className="text-xl mt-1 font-semibold">
            To start, give me your name
          </p>
          <form
            onSubmit={handleSubimt}
            className="mt-6 flex justify-center overflow-hidden"
          >
            <input
              id="nameTrainer"
              placeholder="Your name..."
              className="bg-white/30 mb-3 w-[220px] p-[6px] sm:w-[320px] border-[2px] shadow-md text-center outline-none rounded-[4px_0_0_4px]"
              type="text"
            />
            <button className="bg-red-500 mb-3 hover:bg-red-700 px-3 py-1 text-white border-[2px] border-white/50 rounded-[0_4px_4px_0]">
              Start!
            </button>
          </form>
        </article>
      </section>
      <FooterPokeball />
    </main>
  );
};
export default Home;
