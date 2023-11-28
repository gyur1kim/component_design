import { CheckboxItemData } from "../Types";

export type FindById = (id: string) => CheckboxItemData;
export type SelectOne = (id: string) => void;

const useCheckboxItemDataController = () => {
  // 서버에서 key에 해당하는 데이터를 받아와 위에 정의한 Item 타입의 Tree 형태로 파싱하는 로직 생략
  const items: CheckboxItemData[] = // ...
  
  // id에 해당하는 아이템을 반환한다.
  const findById: FindById = (id: string) => {
    // ...생략
    return item;
  }
  
   // id에 해당하는 아이템을 action한다. checkbox on/off 기능. items가 update 됨.
  const selctOne: SelectOne = (id: string) => {
    // ...생략
  }

  return {
    items, // data
    findById, // 가져오기
    selctOne, // 변경하기
  }
}

export default useCheckboxItemDataController;