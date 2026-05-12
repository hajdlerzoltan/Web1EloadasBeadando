import { Routes, Route } from "react-router-dom";

import Crud from "./crud";

import Calculator from "./calculator";

import Axios from "./axios";


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

            <Route
                path="/axios"
                element={<Axios />}
            />

        </Routes>
    );
}

export default App;