import { render } from 'react-dom';
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SearchParams from './SearchParams';
import WrappedDetails from './Details';
import ThemeContext from "./ThemeContext.js";

const App = () => {
    const theme = useState("darkblue");
    return (
        <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<WrappedDetails />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
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
