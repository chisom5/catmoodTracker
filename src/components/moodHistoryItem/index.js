const MoodHistoryItem = (props) => {
  return (
    <div
      className={[
        "container-moodHistory-list--item",
        `container-moodHistory-list--item--${props.content.type}`,
      ].join(" ")}
    >
      <div
        className={[
          "container-mood--emjois-item",
          `emjois-item--${props.content.type}`,
          "container-mood--emjois-item-mr1"
        ].join(" ")}
      >
        {props.content.icon}
      </div>
      <div>
        <p
          style={{ marginTop: 0 }}
          className={[
            "container-mood--currentEmjoi",
            `container-mood--currentEmjoi--${props.content.type}`,
          ].join(" ")}
        >
          {props.content.name}
        </p>
        <span id="moodHistory-list--item-date">{props.content.date}</span>
      </div>

      <div className="container-moodHistory-list--item-bg">
        {" "}
        <img
          src={require("../../assets/images/moodList-bg.svg").default}
          alt="mood-history-listitem-bg"
        />
      </div>
    </div>
  );
};

export default MoodHistoryItem;
