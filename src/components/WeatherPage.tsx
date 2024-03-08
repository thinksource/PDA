import { useCallback, useState, useMemo } from "react";
import WeatherWidget from "./WeatherWidget";

const WeatherPage = () => {
    const [inputValue, setInput] = useState("Sydney");
    const [location, setLocation] = useState(inputValue);
    
    const updateLocation = useCallback(()=>{
        console.log("inputvalue", inputValue);
        setLocation(inputValue);
        console.log("location", location);
    }, [inputValue, location]);
    const DynamicWidget = useMemo(()=>{
        return <WeatherWidget location={location}/>;
    }, [location]);
    return (
        <><form>
            <input type="text" defaultValue="Sydney" onChange={(e) => setInput(e.target.value)} />
            <button type="button" onClick={updateLocation}>Get weather</button>
        </form>
        {DynamicWidget}
        </>
    )
}
export default WeatherPage;