import s from "../Component/Header.module.scss"
import logo from "../Component/imgs/Frame163.svg"
import twitImg from "../Component/imgs/Social Icons.svg"
import facebk from "../Component/imgs/instar.svg";
import instar from "../Component/imgs/facebook.svg";

export default function Header() {

    return (
        <>
            
                <header className={s.headerContainer}>
                    <nav className={s.nav}>
                        <div className={s.plan}>기획</div>
                        <div className={s.problem}>문제풀기</div>
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