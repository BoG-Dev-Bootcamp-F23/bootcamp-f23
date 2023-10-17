export default function Train(props) {
    const destination = props.DESTINATION + " Station";
    const ogStation = props.STATION; 
    const onTime = props.DELAY === "TOS" ? "On Time" : "Delayed";
    const currColor = props.LINE;
    const waitingTime = props.WAITING_TIME;

    return (
        <div className="train-item-container">
            <h1 style={{"font-weight": "bold"}}>{ogStation.charAt(0).toUpperCase()}</h1>
            <div className="train-item-station-description">
                <p>{`${ogStation} -> ${destination}`}</p>
                <div>
                    <p>{currColor.charAt(0) + currColor.slice(1).toLowerCase()}</p>
                    <p>{onTime}</p>
                </div>
            </div>
            <div>
                <p>{waitingTime.charAt(0)}</p>
                <p>{waitingTime.slice(2)}</p>
            </div>
        </div>
    );
}