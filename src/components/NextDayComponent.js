import React from "react";

class NextDayComponent extends React.Component {
  render() {
    return (
      <div className="data__wednesday night-main__item data__near-day">
        {this.props.image}
        <p className="something__value  wednesday__value">
          {this.props.date_day_next}
        </p>
        <div className="day__icons wednesday__icons">
          <p className="something__title wednesday-icons__up">
            {this.props.temp_day_max}°C{" "}
            <svg width="5" height="8" viewBox="0 0 5 8" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4.14647 2.8535L3 1.70703V7.49998C3 7.77636 2.77636 8 2.49999 8C2.22361 8 1.99997 7.77636 1.99997 7.49998V1.70703L0.853509 2.8535C0.658181 3.04883 0.341776 3.04883 0.146496 2.8535C-0.0488319 2.65817 -0.0488319 2.34177 0.146496 2.14648L2.1459 0.147079C2.19216 0.100672 2.24757 0.0638757 2.30911 0.0384226C2.37019 0.0131569 2.43497 -1.52588e-05 2.50004 -1.52588e-05C2.5651 -1.52588e-05 2.62988 0.0131569 2.69096 0.0384226C2.7525 0.0638757 2.80791 0.100672 2.85417 0.147079L4.85357 2.14648C5.0489 2.34181 5.0489 2.65822 4.85357 2.8535C4.6582 3.04883 4.3418 3.04883 4.14647 2.8535Z" fill="#AAAAAA" />
            </svg>
          </p>
          <p className="something__title wednesday-icons__down">
            {this.props.temp_day_min}°C{" "}
            <svg width="5" height="8" viewBox="0 0 5 8" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4.14647 5.1465L3 6.29297V0.500015C3 0.22364 2.77636 0 2.49999 0C2.22361 0 1.99997 0.22364 1.99997 0.500015V6.29297L0.853509 5.1465C0.658181 4.95117 0.341776 4.95117 0.146496 5.1465C-0.0488319 5.34183 -0.0488319 5.65823 0.146496 5.85352L2.1459 7.85292C2.19216 7.89933 2.24757 7.93612 2.30911 7.96158C2.37019 7.98684 2.43497 8.00002 2.50004 8.00002C2.5651 8.00002 2.62988 7.98684 2.69096 7.96158C2.7525 7.93612 2.80791 7.89933 2.85417 7.85292L4.85357 5.85352C5.0489 5.65819 5.0489 5.34178 4.85357 5.1465C4.6582 4.95117 4.3418 4.95117 4.14647 5.1465Z" fill="#AAAAAA" />
            </svg>
          </p>
        </div>
      </div>
    );
  }
}

export default NextDayComponent;
