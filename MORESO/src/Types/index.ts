export type CheckboxItemData = {
  id: string;
  name: string;
  isChecked: boolean;
  isIndeterminated: boolean;
  count: number;
  children?: CheckboxItemData[];
}