import { Link } from "react-router-dom"
import '../Styles/header.css'

export default function Header(){

    return(
        <>
        <h1>ARGADAS</h1>
        <div className="header">
            <Link className="title" to='/'>Home</Link>
            <Link className="title" to='/about'>About</Link>
            <Link className="title" to='/music'>Music</Link>
            <Link className="title" to='/merch'>Merch</Link>
            <Link className="title" to='/checkout'>Basket</Link>
            <Link className="title" to='/events'>Events</Link>
         </div>
            
        </>
    )
}