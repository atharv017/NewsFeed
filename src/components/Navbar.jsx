import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext';
import { MdSunny } from "react-icons/md";
import { GiNewspaper } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from '../context/ThemeContext';
import { CurrentTime } from './DateTimeIndicator';




function Navbar() {


    const { setSearchValue } = useContext(SearchContext);

    const { state, dispatch } = useContext(ThemeContext);



    return (
        <>

            <nav className="navbar navbar-expand-lg  text-center position-sticky top-0 " style={{ backgroundColor: state.theme == 'light' ? "#eeebda" : "#282b4a", zIndex: "2" }}>
                <div className="container-fluid">
                    <h2 className="navbar-brand fw-bold mx-3" style={{ color: state.theme == 'light' ? "#282b4a" : "#eeebda" }} ><GiNewspaper />NewsFeed</h2>


                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav m-auto  mb-2 mb-lg-0 ">
                            <li className="nav-item mx-3">
                                <button className="btn" style={{ color: state.theme == 'light' ? "#282b4a" : "#eeebda" }} value="sports" onClick={(e) => setSearchValue(e.target.value)}>Sports</button>
                            </li>
                            <li className="nav-item mx-3">
                                <button className="btn" style={{ color: state.theme == 'light' ? "#282b4a" : "#eeebda" }} value="business" onClick={(e) => setSearchValue(e.target.value)}>Business</button>
                            </li>
                            <li className="nav-item mx-3">
                                <button className="btn" style={{ color: state.theme == 'light' ? "#282b4a" : "#eeebda" }} value="health" onClick={(e) => setSearchValue(e.target.value)}>Health</button>
                            </li>
                            <li className="nav-item mx-3">
                                <button className="btn" style={{ color: state.theme == 'light' ? "#282b4a" : "#eeebda" }} value="technology" onClick={(e) => setSearchValue(e.target.value)}>Technology</button>
                            </li>
                            <li className="nav-item mx-3">
                                <button className="btn" style={{ color: state.theme == 'light' ? "#282b4a" : "#eeebda" }} value="entertainment" onClick={(e) => setSearchValue(e.target.value)}>Entertainment</button>
                            </li>

                        </ul>
                    </div>
                    <CurrentTime />
                    <div className='ms-auto'>
                        <button className='btn rounded-3 px-3 mx-3' style={{ color: state.theme == 'light' ? '#eeebda' : "#282b4a", backgroundColor: state.theme == 'light' ? '#282b4a' : "#eeebda" }} onClick={() => dispatch({ type: 'Toggle_Theme' })}>{state.theme == 'light' ? <FaMoon className='p-0 mb-1' /> : <MdSunny className='p-0 mb-1' />}</button>
                        <button className="navbar-toggler" type="button" style={{ backgroundColor: state.theme == 'light' ? '#282b4a' : "#eeebda" }} data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
