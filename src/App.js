import { useState } from "react";

const App = (/* { name = 'Luis' } */) => {

    const [name, setName] = useState("Martina");
    const [lastname, setLastname] = useState("Doe");
    const [todos, setTodos] = useState([]);

    const [show, setShow] = useState(false);

    const [person, setPerson] = useState({
        name: '',
        lastname: '',
        hobbies: {

        }
    });


    const cambiarApellido = (e, option) => {
        console.log(option);
        setLastname(e.target.value);
    }


    const cambiarNombrePersona = e => {
        setPerson({
            ...person,
            name: e.target.value
        })
    }

    const cambiarApellidoPersona = e => {
        setPerson({
            ...person,
            lastname: e.target.value
        })
    }

    const cambiarPersona = e => {
        const { name, value } = e.target;
        setPerson({
            ...person,
            [name]: value,
        })
    }

    return (
        <>
            <h1>Hola, {name} {lastname}</h1>
            <ul>
                {
                    todos.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
            <button onClick={() => {
                setName("Michelle");
            }}>
                Cambiar nombre a Michelle
            </button>
            <button onClick={() => {
                setName("Martina");
            }}>
                Cambiar nombre a Martina
            </button>
            <button onClick={() => {
                setLastname("Smith");
            }}>
                Cambiar apellido a Smith
            </button>
            <button onClick={() => {
                setLastname("Doe");
            }}>
                Cambiar apellido a Doe
            </button>

            <button onClick={() => {
                //todos.push(`Tarea ${todos.length + 1}`); // Mal
                const newTodos = todos.concat(`Tarea ${todos.length + 1}`);
                setTodos(newTodos);
            }}>
                Añadir Tarea
            </button>

            <input type="text" placeholder="Ingrese Nombre" onChange={(e) => {
                setName(e.target.value);
            }} />

            <input type="text" placeholder="Ingrese Apellido" onChange={(e) => setLastname(e.target.value)} />

            <input type="text" placeholder="Ingrese Apellido" onChange={(e) => cambiarApellido(e, "option 1")} />


            <button onClick={() => {
                //setShow(!show)
                setShow(show ? false : true);
            }}>
                {show ? "Ocultar" : "Mostrar"}
            </button>

            <input type="text" name="name" onChange={cambiarPersona} placeholder="Ingrese nombre de la persona" />
            <input type="text" name="lastname" onChange={cambiarPersona} placeholder="Ingrese apellido de la persona" />

            <a href="https://google.cl" onClick={(e) => {
                e.preventDefault();
            }}>
                google
            </a>

            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input type="text" placeholder="search" />
                <button>buscar</button>
            </form>


            


        </>
    )
}

export default App;