import s from './QuizList.module.scss'
import btnImg from './btn.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


export default function QuizList(){
    const navigate = useNavigate();

    const handleDetailClick = () => {
        navigate('./detail');
      }

    return (
        <motion.div
      initial={{ opacity: 0, x: 100 }}  // 오른쪽에서 등장
      animate={{ opacity: 1, x: 0 }}    // 중앙에 자리잡음
      exit={{ opacity: 0, x: -100 }}    // 왼쪽으로 사라짐
      transition={{ duration: 0.5 }}    // 애니메이션 지속 시간
        >
            <main className={s.mainContainer}>
                <section className={s.quizContainer}>
                    <div className={s.question}>문제</div>
                    <div className={s.questionDiv}>
                        <div className={s.textContainer}>10년 전까지 연간 2000여건에 불과했던 아파트 <p>하자</p> 판정 건수가<br />
                        최근 5년간 연평균 4500건으로 급증했다. 단순직 <p>외노자</p> 급증, 무리한 공사 기간 설정 등이 원인이라는 <p>견해</p>가 주를 이룬다 ...</div>
                        <button onClick={handleDetailClick} style={{
            backgroundImage: `url(${btnImg})`,}}></button>
                    </div>
                    <div className={s.questionDiv}>
                        <div className={s.textContainer}>A: "야, 어제 <p>동아리</p> 모임에서 그 <p>틀딱</p> 선배 또 잔소리 엄청 하더라."<br /> 
                        B: "또? 24학번 후배들은 그 선배 <p>딸피</p>라고 부르던데 본인은 아는지 모르겠다."  ...</div>
                        <button onClick={handleDetailClick} style={{
            backgroundImage: `url(${btnImg})`,}}></button>
                    </div>
                    <div className={s.questionDiv}>
                        <div className={s.textContainer}>그는 비수도권의 작은 마을에서 태어나 자랐지만, 뛰어난 학업 성취와 노력으로 명문대에 입학할 수 있었다. 어릴 적부터 장애를 앓아왔지만, 그의 끈기와 열정은 어떠한 ...</div>
                        <button onClick={handleDetailClick} style={{
            backgroundImage: `url(${btnImg})`,}}></button>
                    </div>
                    <div className={s.questionDiv}>
                        <div className={s.textContainer}>실제로 이같이 남녀 갈등이 정치화를 넘어 ‘상업화’되는 경우가 늘고 있다. 최근 변호사 등 법조계 인사들 중 남녀 갈등을 과장하고 이를 통해 자신을 무고죄 전문 변호사 등으로 홍보하는 행태가 많아졌다 ...</div>
                        <button onClick={handleDetailClick} style={{
            backgroundImage: `url(${btnImg})`,}}></button>
                    </div>
                    <div className={s.questionDiv}>
                        <div className={s.textContainer}>충남 아산의 한 병원 원장이 필리핀 이주노동자에게 부친 장례에 참석할 본국행 비행기표 구입에 쓰라며 내어준 100만원을 8개월 만에 돌려받은 사연을 20일 자신의 사회관계망서비스(SNS)를 통해 알려 감동을 선사하고 있다 ...</div>
                        <button onClick={handleDetailClick} style={{
            backgroundImage: `url(${btnImg})`,}}></button>
                    </div>
                    <div className={s.questionDiv}>
                        <div className={s.textContainer}>차화연이 식당에서 잘리고 꽃뱀이 됐다. 5월 25일 방송된 KBS 2TV 주말드라마 ‘미녀와 순정남’ 19회(극본 김사경/연출 홍석구)에서 백미자(차화연 분)는 식당에서 잘리고 돈벌이가 안 되자 남자를 유혹했다 ...</div>
                        <button onClick={handleDetailClick} style={{
            backgroundImage: `url(${btnImg})`,}}></button>
                    </div>
                </section>
            </main>
        </motion.div>
    )
}