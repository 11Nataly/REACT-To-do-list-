  import { useState } from "react";
  import TodoItem from "./components/TodoItem";

  export default function App() {
    const [tareas, setTareas] = useState([]);

    const [input, setInput] = useState('');

    const agregarTarea = () => {
      if (input.trim()) {
        setTareas([
          ...tareas,
          { id: Date.now(), text: input.trim(), completed: false }
        ]);
        setInput('');
      }
    };

    const toggleComplete = (id) => {
      setTareas(
        tareas.map((tarea) =>
          tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea
        )
      );
    };

    return (
      
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold text-center mb-4">Todo List App</h1>
        {/* contenedor para agregar tarea */}
        <div className="flex items-baseline gap-2 mb-4">
          <input
            value={input}
            type="text"
            placeholder="Agregar nueva tarea"
            className="flex-1 border border-gray-300 p-2 rounded"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={agregarTarea}
          >
            Agregar
          </button>
        </div>


        <div className="space-y-3 ">
          {tareas.map((tarea) => (
            <TodoItem
              key={tarea.id}
              tarea={tarea}
              toggleComplete={() => toggleComplete(tarea.id)}
              completed={tarea.completed}
            />
          ))}

           
        </div>
      </div>
    );
  }
