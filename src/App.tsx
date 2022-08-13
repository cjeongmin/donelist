import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import DoneList from "./components/DoneList";

const styles = {
  App: styled.div`
    height: 100vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    .react-calendar {
      width: 100%;
      border: 0px;
    }
    .react-calendar__tile--now {
      background: #ebfbee;
    }
    .react-calendar__tile--now:enabled:hover,
    .react-calendar__tile--now:enabled:focus {
      background: #ebfbee;
    }
    .react-calendar__tile--active {
      background: #d8f5a2;
      color: black;
    }
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
      background: #d8f5a2;
    }
  `,

  Separator: styled.div`
    width: 100%;
    height: 0.01%;
    background-color: rgba(100, 100, 111, 0.2);
    margin: 1% 0% 1% 0%;
  `,
};

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <RecoilRoot>
      <styles.App>
        <Calendar
          calendarType="US"
          formatDay={(locale, date) => date.getDate().toString()}
          value={date}
          onChange={setDate}
        />
        <styles.Separator />
        <DoneList />
      </styles.App>
    </RecoilRoot>
  );
}

export default App;
