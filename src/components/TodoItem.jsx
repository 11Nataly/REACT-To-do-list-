
//pasar parametros entre componentes

export default function TodoItem({ tarea, toggleComplete }) {
  return (
    <div className="flex items-center gap-5 p-3 bg-white shadow-sm rounded">
      <input
        className="form-checkbox h-5 w-5 text-blue-600"
        type="checkbox"
        checked={tarea.completed}
        onChange={() => toggleComplete(tarea.id)}
      />
      <span className={tarea.completed ? "line-through text-gray-400" : "text-black"}>
        {tarea.text}
      </span>

      <button>
        editar
      </button>

      <button>
        eliminar
      </button>


    </div>


  );
}
