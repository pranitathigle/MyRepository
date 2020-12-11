export interface TabsInterface {
  tabitems: TabItemInterface[];
  align: string;
}

export interface TabItemInterface {
  label: string;
  content: string; // todo: make a child node
}
