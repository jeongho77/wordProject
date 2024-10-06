import s from "../Component/Header.module.scss"
import logo from "../Component/imgs/Frame163.svg"
import twitImg from "../Component/imgs/Social Icons.svg"
import facebk from "../Component/imgs/instar.svg";
import instar from "../Component/imgs/facebook.svg";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  // 문제풀기 클릭 시 퀴즈 페이지로 이동
  const handleProblemClick = () => {
    navigate('/quiz');
  };

  const handlePlanClick = () => {
    navigate('./');
  }

    return (
        <>
            
                <header className={s.headerContainer}>
                    <nav className={s.nav}>
                        <div className={s.plan} onClick={handlePlanClick}>기획</div>
                        <div className={s.problem} onClick={handleProblemClick}>문제풀기</div>
                        <div className={s.search}>탐색하기</div>
                        <div className={s.intro}>소개</div>
                    </nav>
                    <div className={s.logoDiv}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={s.share}>
                        <div className={s.imgDiv}>
                            <img src={twitImg} alt="" srcset="" />
                        </div>
                        <div className={s.imgDiv}>
                            <img src={instar} alt="" srcset="" />
                        </div>
                        <div className={s.imgDiv}>
                            <img src={facebk} alt="" srcset="" />
                        </div>
                    </div>
                </header>
        </>
    )
}