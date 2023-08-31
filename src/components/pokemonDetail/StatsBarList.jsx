import BarProgressStat from "./BarProgressStat";

const StatsBarList = ({ stats }) => {
  return (
    <section className="mt-3">
      <h2 className="font-bold text-2xl">Stats</h2>
      {stats?.map((stat) => (
        <BarProgressStat key={stat.name} stat={stat} />
      ))}
    </section>
  );
};
export default StatsBarList;
