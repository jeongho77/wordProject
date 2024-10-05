import './Plan.module.scss'; // 별도의 CSS 파일을 사용할 경우
import s from './Plan.module.scss';
import React, { useEffect, useRef, useState } from 'react';

const Plan = () => {
  const sectionRefs = useRef([]); // 섹션 참조 배열
  const [visibleSection, setVisibleSection] = useState('section1'); // 기본적으로 첫 번째 섹션이 보이도록 설정

  useEffect(() => {
    const options = {
      root: null, // 뷰포트 기준
      rootMargin: '0px',
      threshold: 0.5, // 각 섹션이 50% 이상 보일 때
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
          </div>
        </div>
      </section>

      <section
        id="section2"
        ref={(el) => (sectionRefs.current[1] = el)}
        className={`${s.section2} ${visibleSection === 'section2' ? s.activeSection : s.hiddenSection}`}
      >
        Section 2 content
      </section>

      <section
        id="section3"
        ref={(el) => (sectionRefs.current[2] = el)}
        className={`${s.section3} ${visibleSection === 'section3' ? s.activeSection : s.hiddenSection}`}
      >
        Section 3 content
      </section>
    </main>
  );
};

export default Plan;
