import { Routes, Route } from "react-router-dom";

import Crud from "./crud";

import Calculator from "./calculator";


function App() {

    return (

        <Routes>

            <Route
                path="/crud"
                element={<Crud />}
            />

            <Route
                path="/calculator"
                element={<Calculator />}
            />

        </Routes>
    );
}

export default App;