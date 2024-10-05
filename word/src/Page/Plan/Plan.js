import './Plan.module.scss'; // 별도의 CSS 파일을 사용할 경우
import s from './Plan.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import image1 from "./imgs/image1.svg"
import image2 from "./imgs/image2.svg"
import image3 from "./imgs/image3.svg"

const Plan = () => {
  const sectionRefs = useRef([]); // 섹션 참조 배열
  const [visibleSection, setVisibleSection] = useState('section1'); // 기본적으로 첫 번째 섹션이 보이도록 설정

  useEffect(() => {
    const options = {
      root: null, // 뷰포트 기준
      rootMargin: '0px',
      threshold: 0.6, // 각 섹션이 60% 이상 보일 때
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.id); // 보이는 섹션의 id 저장
        }
      });
    }, options);

    // 모든 섹션에 대한 관찰 시작
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // 컴포넌트 언마운트 시 observer 해제
    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);


  return (
    <main className={s.container}>
      <section
        id="section1"
        ref={(el) => (sectionRefs.current[0] = el)}
        className={`${s.section1} ${visibleSection === 'section1' ? s.activeSection : s.hiddenSection}`}
      >
        <div className={s.textContainer}>
          <div className={s.title}>
            <p>언어 연구 컨퍼런스 2024 『요동치는 언어』</p>
          </div>
          <div className={s.descriptionContainer}>
            <div className={s.description}>
              <p>대안언어연구소에서 주최하는 『요동치는 언어』 프로젝트는</p>
              <p>‘익숙하다는 이유로 문제 삼지 않은 일상 언어에 대해 재고해보자’는 취지의 프로젝트입니다.</p>
              <p>본 웹사이트는 『요동치는 언어』 프로젝트를 직접 체험해보는 웹 페이지로</p>
              <p>&lt;기획&gt;, &lt;문제풀기&gt;, &lt;탐색하기&gt;, &lt;소개&gt; 총 4가지 카테고리로 구성되어 있습니다.</p>
            </div>
            <div className={s.descTable}>
              <div className={s.descDiv}>
                <div className={s.descTitle}>기획</div>
                <div className={s.descContent}>
                  <p>첫 번째 카테고리인 &lt;기획&gt;에서는 대안언어연구소에서 주최하는 『요동치는 언어』 프로젝트 소개 및 기획 의도, 웹 페이지 구성을 확인할 수 있습니다.</p>
                </div>
              </div>
              <div className={s.descDiv}>
                <div className={s.descTitle}>문제풀기</div>
                <div className={s.descContent}>
                  <p>두 번째 카테고리인 &lt;문제풀기&gt;에서는 기사, 방송, 대화 등 일상 생활에서 접할 수 있는 문장 속 잘못 사용되고 있는 단어를 선택해보는 체험을 할 수 있습니다.</p>
                </div>
              </div>
              <div className={s.descDiv}>
                <div className={s.descTitle}>탐색하기</div>
                <div className={s.descContent}>
                  <p>세 번째 카테고리인 &lt;탐색하기&gt;에서는 일상 속 문제어 아카이빙을 탐색해 볼 수 있습니다. 마우스로 일상 속 문제어 카드를 탐색하는 과정을 통해 익숙하다는 이유로 문제 삼지 않았던 단어가 얼마나 많은지 직접 경험해 볼 수 있습니다.</p>
                </div>
              </div>
              <div className={s.descDiv}>
                <div className={s.descTitle}>소개</div>
                <div className={s.descContent}>
                  <p>네 번째 카테고리인 &lt;소개&gt;에서는 『요동치는 언어』 프로젝트를 주최한 &lt;대안언어 연구소&gt;에 대한 조직도 및 연혁을 확인할 수 있습니다.</p>
                </div>
              </div>
            </div>
          </div>435
        </div>
      </section>

      <section
        id="section2"
        ref={(el) => (sectionRefs.current[1] = el)}
        className={`${s.section2} ${visibleSection === 'section2' ? s.activeSection : s.hiddenSection}`}
      >
        <div className={s.conferenceContainer}>
          <div className={s.conferenceTitle}><p>언어 연구 컨퍼런스 2024</p></div>
          <div className={s.conferenceContent}>
            <p>언어 연구 컨퍼런스 2024는 익숙하다는 이유로 문제 삼지 않은 일상 언어에 대해 재고해보도록 하는 언어 연구 컨퍼런스입니다.<br/>
            코엑스C홀, 매일 오전 10시부터 오후 5시에 진행됩니다.<br/>
            『요동치는 언어』 프로젝트의 포스터는 특정 언어가 가진 문제점을 크게 3가지로 분류하여 타이포그래피와 그래픽의 해체로 표현하였습니다.</p></div>
        </div>

        <div className={s.imageContainer}>
          <div className={s.imageDiv}>
            <img src={image2} alt="" className={s.image}/>
            <div className={s.imageDescContainer}>
              <div className={s.imgTitle}>Poster 01</div>
              <div className={s.imgContent}>이분법적인 말이 나타내는 문제점을<br/>
              글자가 찢어지는 형태로 표현한 포스터입니다.</div>
            </div>
          </div>

          <div className={s.imageDiv}>
            <img src={image1} alt="" className={s.image} />
            <div className={s.imageDescContainer}>
              <div className={s.imgTitle}>Poster 02</div>
              <div className={s.imgContent}>잘못된 의미를 내포하는 말이 나타내는 문제점을<br/>
              휘어지는 형태와과 가루가 되어 사라지는 그래픽으로 표현한 포스터입니다.</div>
            </div>
          </div>

          <div className={s.imageDiv}>
            <img src={image3} alt="" className={s.image} />
            <div className={s.imageDescContainer}>
              <div className={s.imgTitle}>Poster 03</div>
              <div className={s.imgContent}>약자와 소수자를 혐오하는 말이 나타내는 문제점을<br/>
              글자가 깨지는 형태로 표현한 포스터입니다.</div>
            </div>
          </div>
        </div>

        
      </section>

      <section
        id="section3"
        ref={(el) => (sectionRefs.current[2] = el)}
        className={`${s.section3} ${visibleSection === 'section3' ? s.activeSection : s.hiddenSection}`}
      >
        <div className={s.planContainer}>
          <div className={s.plan}>기획 의도</div>
          <div className={s.planContentContainer}>
            <div className={s.planTitle}>‘땡깡 피우다’ 라는 말을 아십니까?</div>
            <div className={s.planContent}>‘땡깡’은 뇌전증을 뜻하는 일본어 ‘덴칸’에서 비롯된 말입니다. 발작 증상을 비유했다는 점에서 실제 환자에게 차별적인 단어로 사용됩니다.<br/>
                샤피어 워프의 가설, “언어는 세계 형식을 규정한다.”는 말처럼 우리가 사용하고 있는 '말' 속에는 사회의 모습, 한 나라의 문화, 그 나라의 고유한 정서가 담겨 있습니다.<br/>
                그러나 일상에서 익숙하게 사용하는 많은 표현들에는 뿌리 깊은 가부장제 질서로 인해 여성과 가족의 역할을 제한하고 차별하는 말들, 소수자와 사회적 약자를 혐오하는<br/>
                말들이 혼탁되어 무분별하게 사용되고 있습니다. 또한 지금도 끊임없이 만들어지고 퍼져나가는 신조어에도 인식하지 못한 사회적 약자에 대한 차별과 혐오가 담겨<br/>
                있습니다. 하지만 이러한 문제는 배제되고 혐오받는 집단에 속한 경우가 아니라면 문제를 민감하게 알아채기 어렵고, 사람들은 익숙한 것을 답습하려는 경향을 가지고<br/>
                있기 때문에 의식적으로 우리가 사용하는 단어에 대한 문제점을 제시하지 않는다면, 언어 사용의 긍정적인 방향으로의 변화가 어렵습니다.</div>
            <div className={s.planContentPoint}>대안 언어 연구소는 이러한 언어의 특성을 이해하고, 올바른 언어 사용을 위해 ‘언어 연구 컨퍼런스'를 주최하고, 『요동치는 언어』 프로젝트를 기획하였습니다.</div>
          </div>
        </div>

        <div className={s.planContainer}>
          <div className={s.plan}>목표</div>
          <div className={s.targetContentContainer}>
            <div className={s.targetDiv}>
              <div className={s.targetNumber}>1</div>
              <div className={s.targetContent}>이제는 쓰지 않아도 될 단어, 새로 고쳐야 할 단어에 대한 고찰</div>
            </div>
            <div className={s.targetDiv}>
              <div className={s.targetNumber}>2</div>
              <div className={s.targetContent}>비판과 순화의 과정을 반복하는 연습</div>
            </div>
            <div className={s.targetDiv}>
              <div className={s.targetNumber}>3</div>
              <div className={s.targetContent}>자발적인 문제 인식으로 누구든 단어 사용에 대한 불쾌함과 불편함을 제시할 수 있다는 연대의 메시지</div>
            </div>
            <div className={s.targetDiv}>
              <div className={s.targetNumber}>4</div>
              <div className={s.targetContent}>언어를 재고해보는 날을 지정해, 단어 사용의 틀림에 대해 주장할 수 있는
              <br/>공론의 장 제시</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Plan;
