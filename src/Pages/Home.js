import React, { useState,useEffect, useRef } from 'react';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';
import MoviesRows from '../Component/MoviesRow/MovieRow';
import HeaderContext from '../Context/HeaderContext';
import { headerDaata } from '../Services/staticData';
import { useReactToPrint } from 'react-to-print';
const Home = () => {
    const [headerData, setHeaderData] = useState(headerDaata);
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    useEffect(()=>{       
         let localData = localStorage.getItem("netflixCurrent");
         if(localData){
             setHeaderData(JSON.parse(localData));
         }
    }, [])
    return (
        <>
        <HeaderContext.Provider
            value={{headerData, setHeaderData}}
        >
            <Header headerData={headerData} ref={componentRef}  />
            <button onClick={handlePrint}>Print this out!</button>
            <MoviesRows title="Treanding" fetBaseUrl="treanding" />
            <MoviesRows title="Discover" fetBaseUrl="discover" />

        </HeaderContext.Provider>
       
        <Footer />
 
        </>
    )
}

export default Home;