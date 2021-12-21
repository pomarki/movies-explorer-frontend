import "./InfoMessage.css";

function InfoMessage({ message }) {
  return (
    <div className="info-message__container">
      <p className="info-message__text">{message}</p>
    </div>
  );
}
export default InfoMessage;
