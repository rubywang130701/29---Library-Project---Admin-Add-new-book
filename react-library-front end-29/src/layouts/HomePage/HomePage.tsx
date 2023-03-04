import { Carousel } from "./components/Carousel";
import { ExploreTopBooks } from "./components/ExploerTopBooks";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraeyServices";


export const HomePage =() =>{
    return(
    <>
        <ExploreTopBooks/>
        <Carousel/>
        <Heros/>
        <LibraryServices/>
        </>
    );
}