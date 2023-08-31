const BarProgressStat = ({ stat }) => {
  const getPercentBarProgress = (statValue) => {
    const MAX_STAT_VALUE = 255;
    const percent = (100 * statValue) / MAX_STAT_VALUE;

    return `${percent}%`;
  };

  return (
    <article className="px-2">
      <section className="flex justify-between px-2">
        <h5> {stat.name} </h5>
        <span> {stat.value}/ 255</span>
      </section>
      <div className="h-6 bg-slate-200 rounded-md">
        <div
          style={{ width: getPercentBarProgress(stat.value) }}
          className="h-full rounded-md bg-[ bg-gradient-to-r from-yellow-500 to-orange-500 ]"
        ></div>
      </div>
    </article>
  );
};
export default BarProgressStat;
