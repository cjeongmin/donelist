import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import AddButton from "./components/AddButton";
import DoneList from "./components/DoneList";
import { Modal } from "./components/Modal";

const Styles = {
  App: styled.div`
    box-sizing: border-box;
    height: 95vh;
    width: 95vw;

    @media (max-width: 500px) {
      height: 100vh;
      width: 100vw;
    }

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
      background: #d8f5a2;
    }
    .react-calendar__tile--now:enabled:hover,
    .react-calendar__tile--now:enabled:focus {
      background: #d8f5a2;
    }
    .react-calendar__tile--active {
      background: #ebfbee;
      color: black;
    }
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
      background: #ebfbee;
    }
  `,

  Separator: styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 0.01%;
    background-color: rgba(100, 100, 111, 0.2);
    margin: 1% 0% 1% 0%;
  `,
};

function App() {
  const [date, setDate] = useState(new Date());
  const [activated, setActivated] = useState(false);

  return (
    <RecoilRoot>
      <Styles.App>
        {activated && <Modal visible={activated} />}
        <Calendar
          calendarType="US"
          formatDay={(locale, date) => date.getDate().toString()}
          value={date}
          onChange={setDate}
        />
        <Styles.Separator />
        <DoneList date={date} />
        <AddButton
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            setActivated(!activated);
          }}
        />
      </Styles.App>
    </RecoilRoot>
  );
}

export default App;
