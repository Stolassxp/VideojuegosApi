import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://localhost:7068/api/videojuegos";

function App() {
    const [videojuegos, setVideojuegos] = useState([]);
    const [error, setError] = useState("");
    const [form, setForm] = useState({
        nombre: "",
        genero: "",
        anio: "",
    });

    // SELECT: pedir todos los videojuegos a la API
    const cargarVideojuegos = async () => {
        try {
            const respuesta = await fetch(API_URL);
            const datos = await respuesta.json();
            setVideojuegos(datos);
            setError("");
        } catch (e) {
            setError("No se pudo conectar con la API. ¿Está corriendo?");
        }
    };

    useEffect(() => {
        cargarVideojuegos();
    }, []);

    // INSERT: crear un videojuego nuevo
    const crearVideojuego = async (e) => {
        e.preventDefault();

        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nombre: form.nombre,
                genero: form.genero,
                anio: Number(form.anio),
                completado: false,
            }),
        });

        setForm({ nombre: "", genero: "", anio: "" });
        cargarVideojuegos();
    };

    // UPDATE: cambiar completado a true/false
    const cambiarCompletado = async (juego) => {
        await fetch(`${API_URL}/${juego.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...juego, completado: !juego.completado }),
        });

        cargarVideojuegos();
    };

    return (
        <div className="contenedor">
            <h1>🎮 Mis Videojuegos</h1>

            {error && <p className="error">{error}</p>}

            <form onSubmit={crearVideojuego} className="formulario">
                <input
                    placeholder="Nombre"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    required
                />
                <input
                    placeholder="Género"
                    value={form.genero}
                    onChange={(e) => setForm({ ...form, genero: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Año"
                    value={form.anio}
                    onChange={(e) => setForm({ ...form, anio: e.target.value })}
                    required
                />
                <button type="submit">Agregar</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Género</th>
                        <th>Año</th>
                        <th>Completado</th>
                    </tr>
                </thead>
                <tbody>
                    {videojuegos.map((v) => (
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.nombre}</td>
                            <td>{v.genero}</td>
                            <td>{v.anio}</td>
                            <td>
                                <button onClick={() => cambiarCompletado(v)}>
                                    {v.completado ? "✅ Sí" : "⬜ No"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;