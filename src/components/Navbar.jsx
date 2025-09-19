import Logo from '../assets/react.png'
export default function Navbar(){
    return (
        <header>
            <nav>
                <img src={Logo} alt="React logo"></img>
                <span>React Facts</span>
            </nav>
        </header>
    )
}
