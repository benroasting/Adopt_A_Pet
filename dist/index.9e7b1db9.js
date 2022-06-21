const Pet = (props)=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed), 
    ]);
};
const App = ()=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Eloise",
            animal: "Dog",
            breed: "Golden Retriever"
        }),
        React.createElement(Pet, {
            name: "Leon",
            animal: "Dog",
            breed: "Mix"
        }),
        React.createElement(Pet, {
            name: "Cloey",
            animal: "Dog",
            breed: "Golden Retriever"
        }), 
    ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));

//# sourceMappingURL=index.9e7b1db9.js.map
