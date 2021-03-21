import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ onGoodFeedback, onNeutralFeedback, onBadFeedback }) {
  return (
    <div>
      <button
        className={s.button}
        type="button"
        name="good"
        onClick={onGoodFeedback}
      >
        Good
      </button>
      <button
        className={s.button}
        type="button"
        name="neutral"
        onClick={onNeutralFeedback}
      >
        Neutral
      </button>
      <button
        className={s.button}
        type="button"
        name="bad"
        onClick={onBadFeedback}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onBtnClick: PropTypes.func,
};

export default FeedbackOptions;
