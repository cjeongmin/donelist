import styled from "styled-components";
import useDoneList from "../hooks/useDoneList";

const styles = {
  DoneList: styled.div`
    height: 90%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  DoneItem: styled.div<{ isEven: boolean; marginBottom: boolean }>`
    width: 95%;
    height: 10%;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    margin-bottom: ${(props) => (props.marginBottom ? "0.5%" : "0%")};
    background-color: ${(props) => (props.isEven ? "#e0f2f1" : "#ffffff")};

    .date {
      color: #888888;
      font-size: 0.25rem;
      margin-bottom: 0.1%;
    }
    .content {
      font-size: 1rem;
    }
  `,
};

function DoneItem({
  date,
  content,
  isEven = false,
  marginBottom = true,
}: {
  date: Date;
  content: string;
  isEven?: boolean;
  marginBottom?: boolean;
}) {
  return (
    <styles.DoneItem isEven={isEven} marginBottom={marginBottom}>
      <div className="date">{date.toLocaleString()}</div>
      <div className="content">{content}</div>
    </styles.DoneItem>
  );
}

export default function DoneList({ date }: { date?: Date }) {
  const doneList = useDoneList();

  return (
    <styles.DoneList>
      {doneList.length &&
        doneList.map((doneItem) => (
          <DoneItem
            date={doneItem.date}
            content={doneItem.content}
            key={doneItem.key}
            isEven={doneItem.key % 2 === 0}
            marginBottom={doneItem.key !== doneList[doneList.length - 1].key}
          />
        ))}
    </styles.DoneList>
  );
}
