import { ThreeDots } from 'react-loader-spinner';
import CSS from './Loader.module.css';
export default function Loader() {
    return (
        <ThreeDots
            visible={true}
            height='80'
            width='80'
            color='#3f51b5'
            radius='9'
            ariaLabel='three-dots-loading'
            wrapperStyle={{}}
            wrapperClass={CSS.loader}/>
    )
}