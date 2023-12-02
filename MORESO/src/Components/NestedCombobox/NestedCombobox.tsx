import { useRef } from 'react';
import * as S from './NestedCombobox.styled';
import {
  NestedComboboxProvider,
  useNestedComboboxContext,
  RenderItemFn
} from './NestedCombobox.contexts';
import {useChildComboboxPositionEffect} from "../../Hooks/useChildComboboxPositionEffect";

type ComboboxItem = {
  id: string;
  children?: ComboboxItem[];
}

const ComboboxItems = ({items}: {items: ComboboxItem[]}) => (
  <>
    {items.map((item) =>
      item.children?.length
        ? <DropdownItem key={item.id} item={item} />
        : <OptionItem key={item.id} item={item} />
    )}
  </>
);

const OptionItem = ({item}: {item: ComboboxItem}) => {
  const {renderOptionItem} = useNestedComboboxContext();

  return <S.OptionItem>{renderOptionItem(item.id)}</S.OptionItem>
}

const DropdownItem = ({item}: {item: ComboboxItem}) => {
  const {renderDropdownItem} = useNestedComboboxContext();
  const dropdownItemRef = useRef<HTMLLIElement>(null);
  const comboboxRef = useRef<HTMLUListElement>(null);

  // 자식 Combobox의 Position을 계산해주는 effect
  useChildComboboxPositionEffect({
    dropdownItemRef,
    comboboxRef,
  });

  return (
    <S.DropdownItem ref={dropdownItemRef}>
      {renderDropdownItem(item.id)}

      {/*item의 children을 하위 분류 콤보박스로 그린다.*/}
      {item.children?.length &&
        <S.ChildCombobox ref={comboboxRef}>
          <ComboboxItems items={item.children} />
        </S.ChildCombobox>
      }
    </S.DropdownItem>
  )
}

const NestedCombobox = ({
  items,
  renderDropdownItem,
  renderOptionItem
}: {
  items: ComboboxItem[],
  renderDropdownItem: RenderItemFn;
  renderOptionItem: RenderItemFn;
}) => {
  return (
    <NestedComboboxProvider
      renderDropdownItem={renderDropdownItem}
      renderOptionItem={renderOptionItem}
    >
      <S.RootCombobox>
        <ComboboxItems items={items} />
      </S.RootCombobox>
    </NestedComboboxProvider>
  )
}

export default NestedCombobox;