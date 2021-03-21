import React, { useState } from 'react';

import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import StatisticsList from './components/Statistics/StatisticsList';
import Notification from './components/NotificationComponent';

const App = () => {
  const [good, setGood] = useState(0);

  const handleGoodFeedback = () => {
    setGood(good + 1);
  };

  const [bad, setBad] = useState(0);

  const handleBadFeedback = () => {
    setBad(bad + 1);
  };

  const [neutral, setNeutral] = useState(0);

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };

  const total = good + bad + neutral;
  const positivePercentage = Math.round((good / total) * 100);

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        onGoodFeedback={handleGoodFeedback}
        onNeutralFeedback={handleNeutralFeedback}
        onBadFeedback={handleBadFeedback}
      />
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
