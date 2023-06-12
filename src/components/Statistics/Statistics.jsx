import PropTypes from "prop-types";
import { List, Item, Title, Stat } from "./Statistics.styled";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <Item>
        <Title>Good:</Title>
        <Stat>{good}</Stat>
      </Item>
      <Item>
        <Title>Neutral:</Title>
        <Stat>{neutral}</Stat>
      </Item>
      <Item>
        <Title>Bad:</Title>
        <Stat>{bad}</Stat>
      </Item>
      <Item>
        <Title>Total:</Title>
        <Stat>{total}</Stat>
      </Item>
      <Item>
        <Title>Positive percentage:</Title>
        <Stat>{positivePercentage}%</Stat>
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};