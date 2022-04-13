import "./App.scss";
import { useReducer } from "react";
import MoodHistoryItem from "../components/moodHistoryItem";

const initialState = {
  emjois: [
    { id: 1, icon: "😖", title: "angry" },
    { id: 2, icon: "😐", title: "indifferent" },
    { id: 3, icon: "😃", title: "happy" },
  ],
  currentMood: {},
  moodTrackerList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "happy":
      return {
        ...state,
        currentMood: action.payload,
      };
    case "indifferent":
      return {
        ...state,
        currentMood: action.payload,
      };
    case "angry":
      return {
        ...state,
        currentMood: action.payload,
      };

    case "saveMood":
      return {
        ...state,
        moodTrackerList: [action.payload, ...state.moodTrackerList],
        currentMood: {},
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { emjois, currentMood, moodTrackerList } = state;

  const selectCurrentMood = (emjoi) => {
    switch (emjoi.title) {
      case "happy":
        return dispatch({
          type: emjoi.title,
          payload: {
            icon: emjoi.icon,
            type: emjoi.title,
            name: "Cat was super excited!",
            date: "06-09-2021 / 07:01",
          },
        });

      case "indifferent":
        return dispatch({
          type: emjoi.title,
          payload: {
            icon: emjoi.icon,
            type: emjoi.title,
            name: "Cat was indifferent",
            date: "06-09-2021 / 07:01",
          },
        });

      case "angry":
        return dispatch({
          type: emjoi.title,
          payload: {
            icon: emjoi.icon,
            type: emjoi.title,
            name: "Cat wasn’t having it",
            date: "06-09-2021 / 07:01",
          },
        });

      default:
        return;
    }
  };

  const handleSaveMood = () => {
    dispatch({ type: "saveMood", payload: currentMood });
  };
  return (
    <div className="container">
      <div className="container-inner">
        <section className="container-mood">
          <div className="container-mood-inner">
            <span>
              <img
                src={require("../assets/images/logo.svg").default}
                alt="logo"
              />
            </span>
            <h3 id="container-mood-title">What is your cat’s current mood?</h3>
            <div className="container-mood--emjois">
              {emjois?.map((emjoi) => (
                <div
                  className={[
                    "container-mood--emjois-item",
                    currentMood.type === emjoi.title
                      ? `emjois-item--${currentMood.type}`
                      : null,
                  ].join(" ")}
                  key={emjoi.id}
                  onClick={() => selectCurrentMood(emjoi)}
                >
                  {emjoi.icon}
                </div>
              ))}
            </div>
            {currentMood.name !== undefined && (
              <span
                className={[
                  "container-mood--currentEmjoi",
                  `container-mood--currentEmjoi--${currentMood.type}`,
                ].join(" ")}
              >
                {currentMood.name}
              </span>
            )}
            <button
              onClick={() => handleSaveMood()}
              className={
                currentMood.name !== undefined ? "btn-active" : "btn-disable"
              }
              disabled={currentMood.name !== undefined ? false : true}
            >
              Save mood
            </button>
          </div>
        </section>

        <section className="container-moodHistory">
          <div className="container-moodHistory-headerLogo">
            <span>
              <img
                src={require("../assets/images/logo_sm.svg").default}
                alt="logo_sm"
              />
            </span>
            <p>Cat mood tracker™</p>
          </div>

          <h2 className="container-moodHistory-headerText">Mood History</h2>

          {moodTrackerList.length !== 0 ? (
            <div className="container-moodHistory-list">
              {moodTrackerList?.map((item, i) => (
                <MoodHistoryItem key={i} content={item} />
              ))}
            </div>
          ) : (
            <div className="container-moodHistory-empty">
              <div className="contianer-moodHistory-empty-inner">
                <span>
                  <img
                    src={require("../assets/images/logo_empty.svg").default}
                    alt="logo_empty"
                  />
                </span>
                <p>No mood history to show yet</p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
