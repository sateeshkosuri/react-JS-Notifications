const Notification = (props) => {
  const { className, notificationText } = props;
  return <p className={`${className}`}>{notificationText}</p>;
};

const element = (
  <div className="bg-Container">
    <h1 className="mainHeading">Notifications</h1>
    <div className="box-Container box">
      <img
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        className="image"
      />
      <Notification
        className="notificationTitle "
        notificationText="Information Message"
      />
    </div>
    <div className="box-Container box1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="image"
      />
      <Notification
        className="notificationTitle "
        notificationText="Success Message"
      />
    </div>
    <div className="box-Container box2">
      <img
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        className="image"
      />
      <Notification
        className="notificationTitle "
        notificationText="Warning Message"
      />
    </div>
    <div className="box-Container box3">
      <img
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        className="image"
      />
      <Notification
        className="notificationTitle "
        notificationText="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
