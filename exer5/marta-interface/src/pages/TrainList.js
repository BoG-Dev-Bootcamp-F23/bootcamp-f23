import Train from "../components/Train";
import { useState } from "react";

export default function TrainList(props) {
    const { color, data } = props;

    const filteredData = data.RailArrivals.filter((x) => {
        return x.LINE === color.toUpperCase();
    });

    const [lineColor, setLineColor] = useState(color);
    
    return (
        <div>
            { filteredData.map((x) => {
                return <Train {...x} />
            })}
        </div>
    )
}