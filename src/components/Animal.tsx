import { useState } from "react";

export default function Animal() {
    const [animal, setAnimal] = useState({
        name: "Maunz",
        species: "cat",
        age: 2,
    })
    // const handleIncreaseAge = () => {
    //     //Never mutate a state like this !!! BAD Practice
    //     animal.age = animal.age + 1; // BAD
    //     setAnimal(animal);
    // }

    const handleIncreaseAge = () => {
        // Never mutate state
        // const newAnimal = {...animal, age: animal.age + 1 }; // Good
        // setAnimal(newAnimal)
        // setAnimal({...animal, age: animal.age +1 }); // even shorter
        console.log("before setAnimal:", animal.age);
        setAnimal((prevAnimal) => ({...prevAnimal, age: prevAnimal.age + 1}));
        setAnimal((prevAnimal) => ({...prevAnimal, age: prevAnimal.age + 1}));
        setAnimal((prevAnimal) => ({...prevAnimal, age: prevAnimal.age + 1}));

        console.log("after setAnimal:", animal.age);

    }

    return (
        <>
            <h1>{animal.name}</h1>
            <h2>{animal.species}</h2>
            <h4>{animal.age}</h4>
            <button onClick={handleIncreaseAge}>Increase Age</button>
        </>
    )
}