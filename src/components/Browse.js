import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  return (
    <div>
        <Header/>
       { showGptSearch ? <GptSearch/> : 
        <> {/* React Fragment <> </>*/}
        <MainContainer/>
        <SecondaryContainer/>
        </>
        }
    </div>
  )
}

export default Browse