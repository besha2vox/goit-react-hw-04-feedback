import React, { Component } from 'react';
import Value from './Value';
import Notification from './Notification';

class Statistic extends Component {
  getTotal = values => values.reduce((acc, value) => acc + value, 0);

  getPositiveFeedbackPercentage = (value, total) => (value * 100) / total;

  render() {
    const { stats } = this.props;
    const statsEntries = Object.entries(stats);
    const statsValues = Object.values(stats);
    const total = this.getTotal(statsValues);
    const positiveFeedbackPercentage = this.getPositiveFeedbackPercentage(
      stats.good,
      total
    );

    return (
      <div>
        <h2>Statistic</h2>
        {total ? (
          <>
            {statsEntries.map(([key, value]) => (
              <Value key={key} text={key} count={value} />
            ))}
            <p>Total: {total}</p>
            <p>Positive feedback: {positiveFeedbackPercentage}%</p>
          </>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default Statistic;