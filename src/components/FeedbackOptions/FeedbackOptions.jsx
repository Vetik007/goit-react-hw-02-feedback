import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map((option) => (
        <button key={option} name={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </>
  );
};


FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions