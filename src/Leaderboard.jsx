// Componente generado por IA para el ranking del juego. Revísalo antes de
// aprobarlo: contiene 3 bugs sutiles y 2 malas prácticas.
import { useEffect, useState } from "react";

function Leaderboard({ jugadores }) {
  const [lista, setLista] = useState(jugadores);
  const [total, setTotal] = useState(jugadores.length);

  useEffect(() => {
    setTotal(lista.length);
  });

  function ordenar() {
    setLista(lista.sort((a, b) => b.puntos - a.puntos));
  }

  function eliminar(nombre) {
    setLista(lista.filter((j) => j.nombre !== nombre));
  }

  return (
    <section>
      <h2>Ranking ({total} jugadores)</h2>
      <button onClick={ordenar}>Ordenar por puntos</button>
      <ol>
        {lista.map((j, i) => (
          <li key={i}>
            {j.nombre} — {j.puntos} pts
            <button onClick={() => eliminar(j.nombre)}>✕</button>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function App() {
  const jugadores = [
    { nombre: "KIRA", puntos: 7400 },
    { nombre: "NOVA", puntos: 9800 },
    { nombre: "BYTE", puntos: 5200 },
    { nombre: "PIXEL", puntos: 8650 },
  ];
  return <Leaderboard jugadores={jugadores} />;
}
