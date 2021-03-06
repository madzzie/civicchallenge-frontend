import React from 'react';
import PropTypes from 'prop-types';

import styles from './EventBoxNull.scss';

// import tabIcon from './newtab_icon.png';

/**
 * Constants
 */

/**
 * EventBoxNull
 */

const propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  callToAction: PropTypes.string.isRequired,
  callToActionLink: PropTypes.string.isRequired
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function EventBoxNull({ title, date, callToAction, callToActionLink }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.boxWrapper}>
        <section className={styles.EventBoxNull}>
          <div className={styles.eventTextWrapper}>
            <div className={styles.eventText}>
              <h2 className={styles.title}>{title}</h2>
              <h5 className={styles.date}>{date}</h5>
              <a href={callToActionLink} className={styles.callToAction}><h5>{callToAction}</h5></a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

EventBoxNull.propTypes = propTypes;
EventBoxNull.contextTypes = contextTypes;
EventBoxNull.defaultProps = defaultProps;

export default EventBoxNull;
