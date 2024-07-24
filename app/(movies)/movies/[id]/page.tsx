import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParam {
    params : {
        id : string
    }
}

export async function generateMetadata({params: {id}} : IParam){
    const movie = await getMovie(id);
    return {
        title : movie.title
    }
}

export default async function MovieDetail({params: {id}} : IParam) {
    
    return <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading movie video</h1>}> 
            <MovieVideos id={id}/>
        </Suspense>
    </div>
}