import axios from "axios";

const getImages = async (value, page) => {
    const KEY_API = '29230094-1d6fe7151785ccfc3d660c9e4';
    const response = await axios.get(
        `https://pixabay.com/api/?key=${KEY_API}&q=${value}
        &image_type=photo&orientation=horizontal&safesearc=true&per_page=12&page=${page}`
    );
    return response.data;
}       

export default getImages;