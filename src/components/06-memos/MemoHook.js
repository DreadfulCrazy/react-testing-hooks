import React, { useState, useMemo } from "react";
import { useCouter } from "../../hooks/useCouter";
import { procesoPesado } from "../../helpers/procesoPesado";

import "../02-useEffect/effects.css";

export const MemoHook = () => {
  const { counter, increment } = useCouter(5000);
  const [show, setShow] = useState(true);

  /**
   * Use Memo lo utilizamos cuando deseamos que cualquier proceso que
   * se este ejecutando de nuevo por algun cambio dentro del estado de
   * nuestro componente, sea solo realizado cuando la dependecia que le
   * pasamos como argumento cambie
   */
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{counter}</small>{" "}
      </h3>
      <hr />

      <p> {memoProcesoPesado} </p>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
