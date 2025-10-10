
import {RouterProvider} from "react-router-dom";
import router from "./routing/routing.tsx";
import './styles/styles.scss'

function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
