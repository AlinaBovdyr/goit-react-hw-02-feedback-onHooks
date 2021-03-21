import React, { useState } from 'react';

import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import StatisticsList from './components/Statistics/StatisticsList';
import Notification from './components/NotificationComponent';

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleChange = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        throw Error(`the type of field name - ${name} is not processed`);
    }
  };

  const total = good + bad + neutral;
  const positivePercentage = Math.round((good / total) * 100);

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions onLeaveFeedback={handleChange} />
      <Statistics>
        {total > 0 ? (
          <StatisticsList
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Statistics>
    </Section>
  );
};

export default App;
