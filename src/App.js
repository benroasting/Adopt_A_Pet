import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SearchParams from './SearchParams';
import WrappedDetails from './Details';

const App = () => {
    return (
        <BrowserRouter>
            <header>
                <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
                <Route path="/details/:id" element={<WrappedDetails />} />
                <Route path="/" element={<SearchParams />} />
            </Routes>
        </BrowserRouter>
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
