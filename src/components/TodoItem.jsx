//pasar parametros entre componentes

import { useState } from "react";

export default function TodoItem({ tarea, toggleComplete, eliminarTarea, editarTarea }) {
  const [editando, setEditando] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.text);

  //función para guardar edición
  const guardarEdicion = () => {
    if (nuevoTexto.trim()) {
      editarTarea(tarea.id, nuevoTexto);
      setEditando(false);
    }
  };

  return (
      // colocar dentro de un div para separar los botones editar y eliminar
    <div className="flex justify-between items-center gap-2 p-2 bg-white shadow-sm rounded">
      {/* lado izquierdo con checkbox y texto */}
      {/* ajustar para darle todo el espacio posible al texto */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <input
          className="form-checkbox h-5 w-5 text-blue-600 flex-shrink-0"
          type="checkbox"
          checked={tarea.completed}
          onChange={() => toggleComplete(tarea.id)}
        />

        {editando ? (
          <input
            className="border p-1 rounded flex-1 min-w-0"
            value={nuevoTexto}
            onChange={(e) => setNuevoTexto(e.target.value)}
          />
        ) : (
          // usar truncate para que si el texto es muy largo no se salga del contenedor
          <span className={`truncate ${tarea.completed ? "line-through text-gray-400" : "text-black"}`}>
            {tarea.text}
          </span>
        )}
      </div>

      {/* lado derecho con botones */}
      <div className="flex gap-2 flex-shrink-0">
        {editando ? (
          <button
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            onClick={guardarEdicion}
          >
            Guardar
          </button>
        ) : (
          <button
            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
            onClick={() => setEditando(true)}
          >
            Editar
          </button>
        )}

        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          onClick={() => eliminarTarea(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </div>


  );
}
