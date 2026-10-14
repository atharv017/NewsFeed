import React, { useContext, useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard';
import { CurrentDate } from "../components/DateTimeIndicator";

import { RotatingLines } from 'react-loader-spinner';

import { SearchContext } from '../context/SearchContext';
import { FaSearch } from "react-icons/fa";
import { ThemeContext } from '../context/ThemeContext';
import { toast , ToastContainer } from 'react-toastify';
import axios from 'axios';


function Home() {
    const { searchValue, setSearchValue } = useContext(SearchContext);

    const [data, setData] = useState(null);

    const [count, setCount] = useState(8);

    const [search, setSearch] = useState("");

    const { state } = useContext(ThemeContext);

    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;



    const change = (e) => {
        setSearch(e.target.value);
    
    }

    const submit = (e) => {
        if (search == "") {
            e.preventDefault();
            toast.warn("Enter something to search");
        }
        else {
            e.preventDefault();
            setSearchValue(search);
            setSearch("");

        }
    }

    const update = () => {
        setCount(preCount => preCount + 8);
      
    }

    useEffect(() => {
        newsData();
    }, [searchValue]);

    const newsData = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchValue}&sortBy=publishedAt&apiKey=${API_KEY}`)
            
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const jsonData = await response.json();
            setData(jsonData.articles)
          
        } catch (error) {
            toast.error(error.message)
        }
    }



    return (
        <div style={{ backgroundColor: state.theme == 'light' ? '#EEEBDA' : "#282B4A" , minHeight : "100vh" }}>
            
            {
                data ? <div className='d-flex flex-column align-items-center text-center fw-bold p-2' style={{ color: state.theme == 'light' ? "#282b4a" : "#eeebda" }}>
                    <form className="d-flex w-0 mt-3 mb-2" role="search">
                        <input className="form-control me-2 " type="search" placeholder="Search News" value={search} aria-label="Search" onChange={change} />
                        <button className="btn text-center" style={{ color: state.theme == 'light' ? '#eeebda' : "#282b4a", backgroundColor: state.theme == 'light' ? '#282b4a' : "#eeebda" }} onClick={submit}><FaSearch className='mt-2' /><span className='mt-1 px-1'>Search</span></button>
                    </form>
                    <div>
                        <h1>Stay Informed, Stay Ahead</h1>
                        <p className='lead'>Your daily destination for the latest news, trending stories, and important updates from around the world.<br/> We bring you information across technology, business, sports, health, and entertainment to help you stay informed.</p>
                        <CurrentDate/>
                    </div>

                    

                </div>
                    : <div className="d-flex  justify-content-center align-items-center" style={{ minHeight: "100vh" }}>

                        <RotatingLines
                            visible={true}
                            height="96"
                            width="96"
                            color="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </div>
            }
            <ToastContainer/>
            <div className='container mt-4'>
                <hr style={{ color: state.theme == 'light' ? "#282b4a" : "#eeebda" }}></hr>
                <div className='row'>
                    {
                        data ? data.slice(0, count).map((items, index) =>
                            <NewsCard key={index} time={items.publishedAt} url={items.url} title={items.title} image={items.urlToImage} description={items.description} source={items.source.name} />
                        ) : null
                    }

                </div>

                {
                    data ? <div className='text-center p-2'><button className='btn mb-3 mt-2' style={{ color: state.theme == 'light' ? '#eeebda' : "#282b4a", backgroundColor: state.theme == 'light' ? '#282b4a' : "#eeebda" }} onClick={update}>load more</button></div> : null
                }
            </div>
        </div>
    )
}

export default Home
