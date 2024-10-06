import s from './Quiz.module.scss'

export default function Quiz(){

    return ( <>
        <div className={s.container}>
            <div className={s.questionDiv}>
                <div className={s.div1}>
                 Experience 1
                </div>
                <div className={s.div2}>문제풀기</div>
                <div className={s.div3}>&lt;문제풀기&gt;에서는 기사, 방송, 대화 등  일상 생활에서 접할 수 있는 문장 속<br></br> 잘못 사용되고 있는 단어를 선택해보는 체험을 할 수 있습니다.</div>
                <button className={s.div4}>문제풀기 시작 </button>
            </div>
        </div>
    </>
    )

}