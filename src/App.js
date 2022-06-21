import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Eloise" animal="Dog" breed="Golden Retriever" />
            <Pet name="Leon" animal="Dog" breed="Mix" />
            <Pet name="Ollie" animal="Dog" breed="Maltese" />
        </div>
    )
}

// const App = () => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, "Adopt Me!"),
//         React.createElement(Pet, {
//             name: "Eloise",
//             animal: "Dog",
//             breed: "Golden Retriever",
//         }),
//         React.createElement(Pet, {
//             name: "Leon",
//             animal: "Dog",
//             breed: "Mix",
//         }),
//         React.createElement(Pet, {
//             name: "Cloey",
//             animal: "Dog",
//             breed: "Golden Retriever",
//         }),
//     ]);
// };

render(<App />, document.getElementById("root"));
