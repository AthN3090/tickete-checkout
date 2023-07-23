import greenTick from "./CircleWavyCheck.svg"
import chat from "./ChatsCircle.svg"
import calendar from "./CalendarBlank.svg"
import shield from "./ShieldCheckered.svg"
import "./TicketPromise.css"
function TicketPromise() {
    return ( 
        <div className="ticket-promise-wrapper">
            <div className="ticket-promise-title">
                The Tickete promise
            </div>
            <div className="ticket-promise-card-wrapper">
                <div className="ticket-promise-card">
                    <img src={greenTick} alt="green tick logo" />
                    <div className="card-text">
                        <span>
                            Official tickets
                        </span>
                        <span>
                            Authorised reseller to top attraction
                        </span>
                    </div>
                </div>
                <div className="ticket-promise-card">
                    <img src={chat} alt="green tick logo" />
                    <div className="card-text">
                        <span>
                            Official tickets
                        </span>
                        <span>
                            Authorised reseller to top attraction
                        </span>
                    </div>
                </div>
                <div className="ticket-promise-card">
                    <img src={calendar} alt="green tick logo" />
                    <div className="card-text">
                        <span>
                            Official tickets
                        </span>
                        <span>
                            Authorised reseller to top attraction
                        </span>
                    </div>
                </div>
                <div className="ticket-promise-card">
                    <img src={shield} alt="green tick logo" />
                    <div className="card-text">
                        <span>
                            Official tickets
                        </span>
                        <span>
                            Authorised reseller to top attraction
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
     );
}

export default TicketPromise;