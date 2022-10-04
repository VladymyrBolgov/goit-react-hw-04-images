import {Rings} from 'react-loader-spinner'
import { LoaderBox } from "./Loader.styled";

const Loader = () => {
    return (
        <LoaderBox>
            <Rings
                height="80"
                width="80"
                color="#66CDAA"
                radius="6"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="rings-loading"
            />
        </LoaderBox>
    )
}

export default Loader;