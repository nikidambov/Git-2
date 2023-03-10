const rootElement = document.getElementById("root");
// console.dir(rootElement);
const root = ReactDOM.createRoot(rootElement);

// const headingElement = React.createElement('h1', {}, 'Hello from React!');
// const secondHeadingElement = React.createElement('h2', {}, 'Some slogan here');

// const headerElement = React.createElement('header', {}, headingElement, secondHeadingElement);
// console.log(JSON.parse(JSON.stringify(headerElement)));

// Use JSX Syntax
const headerElement = (
    <div>
        <header>
            <h1>Hello from React!</h1>
            <h2>Slogan here</h2>
        </header>

        <button>click</button>

        <main>
            <h1>git test</h1>
            <h2>git test 2</h2>
            <h3>git test 3</h3>
        </main>
    </div>
);


root.render(headerElement);