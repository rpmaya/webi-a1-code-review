// AI-generated component for the game leaderboard. Review it before
// approving it: it contains 3 subtle bugs and 2 bad practices.
import { useEffect, useState } from "react";

function Leaderboard({ players }) {
  const [list, setList] = useState(players);
  const [total, setTotal] = useState(players.length);

  useEffect(() => {
    setTotal(list.length);
  });

  function sortByPoints() {
    setList(list.sort((a, b) => b.points - a.points));
  }

  function remove(name) {
    setList(list.filter((p) => p.name !== name));
  }

  return (
    <section>
      <h2>Leaderboard ({total} players)</h2>
      <button onClick={sortByPoints}>Sort by points</button>
      <ol>
        {list.map((p, i) => (
          <li key={i}>
            {p.name} — {p.points} pts
            <button onClick={() => remove(p.name)}>✕</button>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function App() {
  const players = [
    { name: "KIRA", points: 7400 },
    { name: "NOVA", points: 9800 },
    { name: "BYTE", points: 5200 },
    { name: "PIXEL", points: 8650 },
  ];
  return <Leaderboard players={players} />;
}
