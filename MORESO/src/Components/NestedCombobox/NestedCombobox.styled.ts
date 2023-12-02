import styled from '@emotion/styled';

// 콤보박스 공통 css
const comboboxCss = `
  flex-direction: column;
  width: 250px;
  border: 1px solid #e8eaed;
`;

// 기본으로 보여지는 1depth 콤보박스
export const RootCombobox = styled.ul`
  ${comboboxCss};
`;

// 마우스 호버 시 보여지는 2depth 이하 콤보박스
export const ChildCombobox = styled.ul`
  ${comboboxCss};

  position: absolute;

  display: none;
`;

// 콤보박스 아이템 공통 css
const itemCss = `
  display: flex;
  align-items: center;
`;

// 호버했을 때 하위 분류 리스트의 display를 on 하고, 상위 분류의 모든 backgorund-color를 변경
export const DropdownItem = styled.li`
  ${itemCss};

  &:hover {
    background-color: #e8eaed;

    & > ul {
      display: flex;
    }
  }
`;

export const OptionItem = styled.li`
  ${itemCss};
`;