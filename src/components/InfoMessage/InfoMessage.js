import "./InfoMessage.css";


function InfoMessage({ isRegisterDone }) {

  

  return (
    <p className="info-message__text info-message__text_error">{isRegisterDone}</p>
  );
}
export default InfoMessage;
