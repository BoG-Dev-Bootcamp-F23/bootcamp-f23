import ChildComponent from './ChildComponent.js';

const data = [
    {
        name : "Charlie",
        role : "Student",
        semesters : 3,
    },
    {
        name : "zini",
        role : "ta",
        semesters : 3,
    }
]


export default function ParentComponent() {
    return (
        <div>
            <h1>Bits of Good Developer Bootcamp Directory</h1>
            {
                data.map((person) => {
                    return <ChildComponent {...person}/>
                })
            }
        </div>
    );
}