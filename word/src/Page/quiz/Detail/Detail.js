import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import s from './Detail.module.scss';
import { useNavigate } from 'react-router-dom';


export default function Detail() {
    const [selectedWords, setSelectedWords] = useState([]);
    const [filledColors, setFilledColors] = useState([false, false, false]); // 각 div의 색상 상태
    const [divColor, setDivColor] = useState('');

    const navigate = useNavigate(); // navigate 초기화

    useEffect(() => {
        
        // if (selectedWords.length === 3) {
        //   alert('단어 3개 선택');
        // }
      }, [selectedWords]); // selectedWords가 변경될 때마다 실행

    // 클릭 이벤트 핸들러
    const handleWordClick = (event, word) => {
        const pElement = event.target;
        let newSelectedWords = [];
      
        if (selectedWords.includes(word)) {
          // 단어 제거
          newSelectedWords = selectedWords.filter((e) => e !== word);
          setSelectedWords(newSelectedWords);
          pElement.style.color = '#000';
          setDivColor("none");
      
          // 해당 인덱스에 대한 색상 제거
          const index = filledColors.lastIndexOf(true); // true인 색상의 인덱스 찾기
          if (index !== -1) {
            setFilledColors((prevColors) => {
              const newColors = [...prevColors];
              newColors[index] = false; // 해당 인덱스의 색상 제거
              return newColors;
            });
          }
        } else if (selectedWords.length < 3) {
          // 단어 추가
          newSelectedWords = [...selectedWords, word];
          setSelectedWords(newSelectedWords);
          pElement.style.color = '#FFC540';
      
          // 빈 공간에 색상 추가
          const indexToFill = filledColors.indexOf(false); // 첫 번째 false 인덱스를 찾음
          setFilledColors((prevColors) => {
            const newColors = [...prevColors];
            newColors[indexToFill] = true; // 색상 채우기
            return newColors;
          });
        }
      
        // 새로 업데이트된 selectedWords 값을 기준으로 검사
        console.log(newSelectedWords.length);
        if (newSelectedWords.length === 3) {
          setDivColor("block");
        }
      };

      const onClickPrevPage = () =>{
            navigate('/quizlist')
      };
      
      const onClickNextPage = () =>{
            navigate('./check', { state: { selectedWords } });
      }
      

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}  // 오른쪽에서 등장
            animate={{ opacity: 1, x: 0 }}    // 중앙에 자리잡음
            exit={{ opacity: 0, x: -100 }}    // 왼쪽으로 사라짐
            transition={{ duration: 0.5 }}    // 애니메이션 지속 시간
        ><section className={s.container}>

            <div className={s.quizContainer}>
                <div className={s.title}>잘못 사용된 단어를 3개 골라보세요.</div>
                <div className={s.contentContainer}>
                    <div className={s.arrowPrev} onClick={onClickPrevPage}>&lt;</div>
                    <div className={s.arrowNext} onClick={onClickNextPage} style={{display : divColor}} >&gt;</div>
                    <div className={s.content}>
                        그는 유능한 &nbsp;
                        <p 
                        onClick={(event) => handleWordClick(event, '변호사')}
                        >변호사</p>로서{' '}
                        <p 
                        onClick={(event) => handleWordClick(event, '몸값')}
                        >몸값</p>이 높아져{' '}
                        <p 
                        onClick={(event) => handleWordClick(event, '연봉')}
                        >연봉</p>이 상당히 올랐다. <br />
                        바쁜 업무 덕분에 재정적으로는 안정되었지만, 여전히{' '}
                        <p 
                        onClick={(event) => handleWordClick(event, '미혼')}
                        >미혼</p>으로 지내고 있다. <br />
                        친구들은 그에게 <p 
                        onClick={(event) => handleWordClick(event, '연애')}
                        >연애</p>와{' '}
                        <p 
                        onClick={(event) => handleWordClick(event, '결혼')}
                        >결혼</p>을 권하지만, 그는 일에 대한{' '}
                        <p 
                        onClick={(event) => handleWordClick(event, '열정')}
                        >열정</p>이 더 크다. <br />
                        결국 그는 개인적인 삶보다{' '}
                        <p 
                        onClick={(event) => handleWordClick(event, '커리어')}
                        >커리어</p>에 더 많은 시간을{' '}
                        <p 
                        onClick={(event) => handleWordClick(event, '투자')}
                        >투자</p>하기로 결정했다.
                    </div>
                </div>
                <div className={s.checkContainer}>
                    {filledColors.map((isFilled, index) => (
                        <div 
                            key={index} 
                            style={{ 
                                backgroundColor: isFilled ? '#FFC540' : 'transparent'
                            }} 
                        />
                    ))}
                </div>
            </div>
            
        </section>
        <button className={s.prev}></button>
        </motion.div>
    )    
}