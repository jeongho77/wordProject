import s from './Quiz.module.scss';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function Quiz(){

    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleQuizStart = () => {
        navigate('/quizlist'); // '/quizlist' 경로로 이동
    };

    return ( <>

        <motion.div
            initial={{ opacity: 0, x: 100 }}  // 오른쪽에서 등장
            animate={{ opacity: 1, x: 0 }}    // 중앙에 자리잡음
            exit={{ opacity: 0, x: -100 }}    // 왼쪽으로 사라짐
            transition={{ duration: 0.5 }}    // 애니메이션 지속 시간
        >
            <div className={s.container}>
                <div className={s.questionDiv}>
                    <div className={s.div1}>
                    Experience 1
                    </div>
                    <div className={s.div2}>문제풀기</div>
                    <div className={s.div3}>&lt;문제풀기&gt;에서는 기사, 방송, 대화 등  일상 생활에서 접할 수 있는 문장 속<br></br> 잘못 사용되고 있는 단어를 선택해보는 체험을 할 수 있습니다.</div>
                    <button className={s.div4} onClick={handleQuizStart}>문제풀기 시작 </button>
                </div>
            </div>
        </motion.div>
    </>
    )

}