import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMessage } from "../redux/reducer";

export const Messages = () => {
  const appStatus = useSelector((state) => state.appStatusReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(closeMessage());
    }, appStatus.messageTime * 1000);
  }, [appStatus.messageOpened]);

  if (!appStatus.messageOpened) {
    return null;
  }

  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        padding: "10px",
        backgroundColor: "green",
        position: "fixed",
        bottom: "0",
        width: "100%",
        opacity: appStatus.messageOpened ? 1 : 0,
        transition: "all 0.5s",
        zIndex: "1",
      }}
    >
      <p>{appStatus.messageText}</p>
    </div>
  );
};
