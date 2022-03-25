import "./InfoMessage.css";

function InfoMessage({ message, type }) {

  let textStyle;
  type === "search" ? textStyle = "info-message__text info-message__text_search" : textStyle = "info-message__text";

  return (
    <div className="info-message__container">
      <p className={textStyle}>{message}</p>
    </div>
  );
}
export default InfoMessage;
