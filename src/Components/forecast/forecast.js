import './forecast.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const currentDay = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(currentDay, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, currentDay));

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowMultipleExpanded allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="day">{forecastDays[index]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="high">High: {Math.round(item.main.temp)}°F</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Feels Like: </label>
                                    <label className="grid-item-data">{item.main.feels_like}°F</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity: </label>
                                    <label className="grid-item-data">{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind: </label>
                                    <label className="grid-item-data">{item.wind.speed} m/h</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast;