import logo from './logo.svg';
// import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
// import './vendors/fontawesome/css/all.min.css';

import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter/index.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';
import ExploreScreen from "./components/Tuiter/explore-screen";
import HomeScreen from "./components/Tuiter/home-screen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route path=""
                               element={<Labs/>}/>
                        <Route path="labs"
                               element={<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route index
                                element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>
                           {/*<Route path="notifications"*/}
                           {/*        element={<NotificationScreen/>}/>*/}
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

