import React, {useEffect} from 'react'
export const useChildComboboxPositionEffect = ({
  dropdownItemRef,
  childComboboxRef
}: {
  dropdownItemRef: React.RefObject<HTMLLIElement>;
  childComboboxRef: React.RefObject<HTMLUListElement>;
}) => {
  useEffect(() => {
    const calcPosition = () => {
      if (!dropdownItemRef.current || !childComboboxRef.current) {
        return;
      }
      const { offsetTop = 0, offsetLeft = 0, offsetWidth = 0} = dropdownItemRef.current;

      childComboboxRef.current.style.left = `${offsetLeft + offsetWidth}px`;
      childComboboxRef.current.style.top = `${offsetTop}px`;
    };

    if (dropdownItemRef.current) {
      dropdownItemRef.current.addEventListener('mouseover', calcPosition);

      return () => {
        dropdownItemRef.current?.removeEventListener('mouseover', calcPosition);
      };
    }
  }, []);
};