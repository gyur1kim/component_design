export type CheckboxItemData = {
  id: string;
  name: string;
  isChecked: boolean;
  isIndeterminate: boolean;
  count: number;
  children?: CheckboxItemData[];
}