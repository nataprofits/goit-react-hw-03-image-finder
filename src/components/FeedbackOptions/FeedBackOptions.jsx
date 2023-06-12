import React from 'react';
import PropTypes from 'prop-types'
import { ButtonList, Item, Button } from "./FeedBackOptions.styled";

const FeedBackOptions = ({options, onLeaveFeedback}) => {
return (
    <ButtonList>
        {options.map((option)=>(
<Item>
    <Button name = {option} type="button" key={option} onClick={()=> onLeaveFeedback(option)}>{option}</Button></Item>
        ))}
    </ButtonList>
);
};
FeedBackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.func.isRequired,
        neutral: PropTypes.func.isRequired,
        bad: PropTypes.func.isRequired,
    }),
    onLeaveFeedback: PropTypes.func.isRequired
}
export default FeedBackOptions;