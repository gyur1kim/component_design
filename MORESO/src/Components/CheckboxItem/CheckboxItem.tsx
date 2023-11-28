import * as S from './CheckboxItem.styled';
import Checkbox from '@mui/material/Checkbox';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type CheckboxTextWithCountItem = {
  id: string;
  name: string;
  isChecked: boolean;
  count: number;
  onClick: React.MouseEventHandler<HTMLElement>;
};

type CheckboxDropdownItem = {
  id: string;
  name: string;
  isChecked: boolean;
  isIndeterminate: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
};

const TextWithCount = ({ name, isChecked, count, onClick }: CheckboxTextWithCountItem) => (
  <S.Wrapper>
    <S.Left>
      <Checkbox checked={isChecked} onClick={onClick} />
      {name}
    </S.Left>
    <S.Right>
      <S.Count>{count}</S.Count>
    </S.Right>
  </S.Wrapper>
);

const Dropdown = ({ name, isChecked, isIndeterminate, onClick }: CheckboxDropdownItem) => (
  <S.Wrapper>
    <S.Left>
      <Checkbox indeterminate={isIndeterminate} checked={isChecked} onClick={onClick} />
      {name}
    </S.Left>
    <S.Right>
      <S.Count>
        <ArrowForwardIosIcon />
      </S.Count>
    </S.Right>
  </S.Wrapper>
);

const CheckboxItem = {
  TextWithCount,
  Dropdown,
};

export default CheckboxItem;