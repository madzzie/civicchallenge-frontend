/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'util/classNames';

import globalStyles from 'main.scss';
import styles from './ScheduleBox.scss';

/**
 * Constants
 */

/**
 * ScheduleBox
 */

const propTypes = {
  dayEvents: PropTypes.array.isRequired,
  scheduleButton: PropTypes.array,
  eventSummary: PropTypes.array,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {
  scheduleButton: '',
  eventSummary: '',
};

function ScheduleBox({ dayEvents, scheduleButton, eventSummary }) {
  return (
    <div className={styles.scheduleWrapper}>
      {dayEvents
        .map(({ date, timeRange, dayName, dayDetails, buttonTitle, buttonLink }) => (
          <div className={styles.scheduleBox}>
            <div className={styles.date}>
              <h5 key={date}>{date}</h5>
              <span key={timeRange}>{timeRange}</span>
            </div>
            <div className={styles.event}>
              <p className={styles.dayName} key={dayName}>{dayName}</p>
              <p
                className={styles.eventDetails}
                dangerouslySetInnerHTML={{
                  __html: dayDetails,
                }}
              />
              {buttonTitle &&
                <div className={classNames([globalStyles.sectionBtn, styles.eventButton])}>
                  <a className={classNames([globalStyles.salmonSmallOutline])} href={buttonLink} target="_blank" rel="noreferrer noopener">
                    {buttonTitle}
                  </a>
                </div>}
            </div>
          </div>
        ))}
      {eventSummary &&
        <div className={styles.eventSummary}>
          {eventSummary.map((eventParagraph => (
            <p
              key={eventParagraph}
              dangerouslySetInnerHTML={{
                __html: eventParagraph,
              }}
            />
          )))}
        </div>
      }
      {scheduleButton &&
        <div className={classNames([styles.calloutBtn, globalStyles.sectionBtn])}>
          {scheduleButton.map(({ scheduleLink, scheduleCallout }) =>
            <a className={globalStyles.salmonOutline} href={scheduleLink}>
              <span>{scheduleCallout}</span>
            </a>
          )}
        </div>
      }
    </div>
  );
}

ScheduleBox.propTypes = propTypes;
ScheduleBox.contextTypes = contextTypes;
ScheduleBox.defaultProps = defaultProps;

export default ScheduleBox;
