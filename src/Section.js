import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Section.css';

const Section = (props) => {
  //WEEK DIC
  const history = useHistory();
  const weekList = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
  };
  // console.log("week?",
  // Object.keys(weekList).map((num, index) => weekList[num])
  // );

  //TODAY
  const DayList = Object.keys(weekList).map((num, index) => {
    // Object.keys()배열로 나온다
    let today = new Date().getDay();
    let day =
      today + parseInt(num) > 6
        ? // 2+문자열숫자변환(0) //딕셔너리 숫자랑 더해진다 day = 2345678
          today + parseInt(num) - 7
        : today + parseInt(num);
    return weekList[day];
    //   console.log('day')
  });
  // console.log('Today?',DayList)

  //RATE
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
  function RandomNum() {
    let arr = [];
    for (let i = 0; i < 7; i++) {
      arr.push(getRandom(0, 5));
    }
    return arr;
  }
  let weekRates = RandomNum();
  function sum(weekRates) {
    let rateSum = 0;
    for (let i = 0; i < 7; i++) {
      rateSum += weekRates[i] + 1;
    }
    return rateSum;
  }
  let rateAvg = (sum(weekRates) / 7).toFixed(1);
  let [avg, setAvg] = React.useState(rateAvg);

  return (
    <section>
      <div className="Box">
        <h1 style={{ color: '#6038F2' }}>My week?</h1>
        <hr />

        <div className="Container">
          {DayList.map((num, index) => {
            return (
              <div className="Day" key={index}>
                {num}

                <div className="Circles">
                  {Array.from({ length: 5 }, (num, idx) => {
                    return (
                      <div
                        className="Circle"
                        key={index}
                        style={{
                          backgroundColor:
                            weekRates[index] + 1 <= idx ? '#e0e0e0' : '#353535',
                        }}
                      ></div>
                    );
                  })}

                  <div
                    className="Triangle"
                    onClick={() => history.push(`/detail/${num}`)}
                  ></div>
                </div>
                {/* Circles_div */}
              </div>
            );
          })}
          {/* Day_div */}
        </div>
        {/* Container_div */}

        <hr />
        <div className="AvgBox">
          <h3>Average</h3>
          <h3>{avg}</h3>
          <button
            onClick={() => {
              setAvg(parseInt(0)).toFixed(1);
            }}
          >
            RESET
          </button>
        </div>
        {/* AvgBox_div */}
      </div>
      {/* Box_div */}
    </section>
  );
};
export default Section;

// SECTION PAGE
// 1. 요일
//  -getDay()로 날짜 요일 가져오기
// 2. 평점
//  -평점 랜덤으로 보이기
//  -Random(),Floor():주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
// 3. 동그라미
//  -onClick()으로 색상 바꾸기
