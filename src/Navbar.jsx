import logo from './img/JAMS_313X313.png'

//Main navigation menu
export function Navbar(){
    return (
        <>
        <nav>
            <img src={logo} alt="logo" />
            <div>
                <ul id="navbar">
                    <li><a className="active" href="index.html">Home</a></li>
                    <li><a href="index.html">Screen 1</a></li>
                    <li><a href="index.html">Screen 2</a></li>
                    <li><a href="index.html">Screen 3</a></li>
                    <li><a href="index.html">Screen 4</a></li>
                </ul>
            </div>
        </nav>
        </>
    );
}

