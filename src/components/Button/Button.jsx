import { Btn } from "./Button.styled";

export function BtnLoadMore({ onClick }) {
  return (
    <Btn onClick={onClick} type="button">
      Load more
    </Btn>
  );
}
