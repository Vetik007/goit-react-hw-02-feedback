// import React from 'react';
import React, { Component } from 'react';

// class Feedback extends React.Component {

//   state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
//   }
  
//   handleIncrementGood = () => {
//     this.setState({good: this.state.good + 1});
//     console.log('good', this.state.good);

//   }
  
//    handleIncrementNeutral = () => {
   
//     this.setState({neutral: this.state.neutral + 1});
//     console.log('good', this.state.neutral);

//   }
  
//    handleIncrementBad = () => {
   
//     this.setState({bad: this.state.bad + 1});
//     console.log('good', this.state.bad);
//   }
  
//   // countTotalFeedback()





//   // export const Feedback = () => {
//     render() {
//     return (
//       <div>
//         <h1>Please leave feedback</h1>
//         <button type="button" onClick={this.handleIncrementGood}>Good</button>
//         <button type="button" onClick={this.handleIncrementNeutral}>Neutral</button>
//         <button type="button" onClick={this.handleIncrementBad}>Bad</button>
//         <h2>Statistics</h2>
//         <ul>
//           <li>
//             <p>Good:
//               <span>{this.state.good}</span>
//             </p>
            
//           </li>

//           <li>
//             <p>Neutral:
//               <span>{this.state.neutral}</span>
//             </p>
//           </li>

//           <li>
//             <p>Bad:
//               <span>{this.state.bad}</span>
//             </p>
//           </li>
//         </ul>
//       </div>
//     );
//     // }
//   };
// }

// export default Feedback;



// !===========================================


class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackClick = (event) => {
    const feedbackType = event.target.name;
    this.setState((prevState) => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));

    console.log(feedbackType)
    console.log(event);
    // console.log('neutral', this.state.neutral);
    // console.log('bad', this.state.bad);
    // console.log(feedbackType)

  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
    // console.log('countTotalFeedback', this.state.good)
  };
  
  // console.log(countTotalFeedback)

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Leave your feedback</h1>
        <button name="good" onClick={this.handleFeedbackClick}>
          Good
        </button>
        <button name="neutral" onClick={this.handleFeedbackClick}>
          Neutral
        </button>
        <button name="bad" onClick={this.handleFeedbackClick}>
          Bad
        </button>
        <h2>Statistics</h2>
        {this.countTotalFeedback() > 0 ? (
          <ul>
            <li>
              Good: {good}
            </li>
            <li>
              Neutral: {neutral}
            </li>
            <li>
              Bad: {bad}
            </li>
            <li>
              Total feedback: {this.countTotalFeedback()}
            </li>
            <li>
              Positive feedback percentage: {this.countPositiveFeedbackPercentage()}%
            </li>
          </ul>
        ) : (
          <p>No feedback given yet</p>
        )}
      </div>
    );
  }

  
}

export default Feedback;
