import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Job} from "./pages/job/job";
import {Layout} from "./components/layout/layout";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Layout/>
            <Job/>
        </>
    )
}

export default App
