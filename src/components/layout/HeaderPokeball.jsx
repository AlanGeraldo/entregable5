
const HeaderPokeball = ({children}) => {
  
  return (
    <section>
        <header>
        <div className="h-11 bg-red-500 relative">
            <div className="absolute left-5 bottom-0 w-[210px] sm:w-[245px]">
                <img src="/images/banner.png" alt="" />
            </div>
        </div>
      <div className="h-9 bg-black relative">
        <button className="h-14 after:block after:content-[''] after:h-7 after:absolute after:left-1/2 after:-translate-x-1/2 after:rounded-full after:top-1/2   after:bg-slate-600 after:aspect-square  absolute right-0 -translate-x-1/2 after:-translate-y-1/2 aspect-square border-[8px] border-black rounded-full bg-white after:border-[6px] after:border-black -top-5 transition-colors hover:bg-red-500 cursor-pointer"></button>
      </div>
        </header>
        {children}
    </section>
  )
}
export default HeaderPokeball