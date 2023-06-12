import { Component } from "react";
import FeedBackOptions from "components/FeedbackOptions/FeedBackOptions";
import Section from "components/Section/Section";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackProcentage = ()=>{
    const{good} = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    if (countTotalFeedback === 0) {
      return 0;
    }
    return Math.round((good / countTotalFeedback) * 100);
  }

  onLeaveFeedback = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }))
  }
  render(){
    const { good, neutral, bad} = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackProcentage = this.countPositiveFeedbackProcentage();
    const optionsForFeedback = Object.keys(this.state);
      return (
    <div>
      <Section title="Please leave feedback">
        <FeedBackOptions
        options = {optionsForFeedback}
        onLeaveFeedback={this.onLeaveFeedback}
        />
      </Section>

      {countTotalFeedback > 0 ? 
      <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackProcentage} />
      </Section>: <Notification message="There is no feedback" />}
    </div>
  )
  }
 
};
