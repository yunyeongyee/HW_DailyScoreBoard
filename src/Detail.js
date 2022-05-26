import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Detail.css';

const Detail = (props) => {
  const history = useHistory();
  const params = useParams();
  const [rate, setRate] = React.useState(0);
  return (
    <>
      <div className="DetailSection">
        <h1>{params.id}'S REVIEW</h1>

        <div className="Circles">
          {Array.from({ length: 5 }, (num, index) => {
            return (
              <div
                className="Circle"
                key={index}
                onClick={() => {
                  setRate(index + 1);
                }}
                style={{
                  backgroundColor: rate < index + 1 ? '#e0e0e0' : '#353535',
                }}
              ></div>
            );
          })}
        </div>

        <button onClick={() => history.goBack()}>🏃‍♀️💨...GO BACK</button>
      </div>
    </>
  );
};
export default Detail;
