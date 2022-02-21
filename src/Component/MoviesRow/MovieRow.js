import React, {useEffect, useState, useContext} from 'react';
import { fetchMoviesData } from '../../Services/Moview';
import HeaderContext from '../../Context/HeaderContext';

const MoviesRows = (props)=>{
    let { setHeaderData } = useContext(HeaderContext);
    let { title, fetBaseUrl } = props;
    const [movies, setMovies] = useState(null);
    const fetchMovie = async ()=>{
        const movie = await fetchMoviesData(`${fetBaseUrl}`);
        //console.log(movie.results);
        setMovies(movie.results);
    }
    useEffect(()=>{
        fetchMovie();
    }, [])
    const MovieHandler = (vaa)=>{
        // alert(vaa)
         const filteredMovie = movies.filter(element=> element.id === vaa );
         //console.log(filteredMovie);
         setHeaderData(filteredMovie[0])
         localStorage.setItem("netflixCurrent", JSON.stringify(filteredMovie[0]));
    }
    return (
        <div className="row">
            <div className="col-md-12 mt-2 ml-2">
                <h1 className="h3 text-white mt-2 ml-2" > {title} </h1>
            </div>
            <div className="col-md-12  movie_compo">
                    {
                       movies ? movies.map((movie, index) => {
                            return (
                                <div className="moview_view" key={movie.id} onClick={()=> MovieHandler(movie.id) } >
                                    <img src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} className="feature_image" alt="imagae" />
                                </div> 
                            )
                        }) : "Loading"
                    }
                
       
       
                
                </div>
     
        </div>
    )
}

export default MoviesRows;