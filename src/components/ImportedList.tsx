import ListItem from "./ListItem";

export default function ImportantList() {
    let animals: string[] = ["Lion", "Puma", "Horse", "Snake", "Elephant"];
    const logAnimalName = (name: string) => {
        console.log(name); 
    }

    return (
        <>
            {animals.length === 0 ? (
                <div>No Animals to show</div>
            ) : (
                <ul>
                    {animals.map((animal)=> {
                        return <ListItem key={animal} animalName={animal} handleClick={logAnimalName} />
                    })}
                </ul>
            )}
        </>
    )

    // Version 1
    // if (animals.length === 0) {
    //     return <div>No Animals to show</div>;
    // } else { 
    //     return (
    //         <ul>
    //             {animals.map((animal) => {
    //                 return <li key={animal}>{animal}</li>;
    //             })}
    //         </ul>
    //      )
    // }

    // Version 2
    // return(
    //     <ul>
    //         {animals && animals.map((animal) => {
    //             return <li key={animal}>{animal}</li>
    //         })}
    //     </ul>
    // )

    // Version 3
    // return (
    //     <>
    //         {animals.length === 0 ? (
    //             <div>No Animals to show</div>
    //         ) : (
    //             <ul>
    //                 {animals.map((animal)=> {
    //                     return <ListItem key={animal} animalName={animal} />
    //                 })}
    //             </ul>
    //         )}
    //     </>
    // )
}