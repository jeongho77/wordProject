import s from './Check.module.scss';
import { useLocation } from 'react-router-dom';

export default function Check() {

    const location = useLocation();
    const { selectedWords } = location.state || {}; // state에서 selectedWords를 가져옴 // state에서 value를 가져옴

    return (
        <>
        <div className={s.div}>
            고른것들 : {selectedWords}
        </div>
        </>
    )
}