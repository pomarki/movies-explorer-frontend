import "./InfoMessage.css";

function InfoMessage({ isRegisterDone }) {
  return (
    <p className="info-message__text">
      {isRegisterDone}
    </p>
  );
}
export default InfoMessage;
