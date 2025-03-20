import RoleTree from "@c/RoleTree/RoleTree.vue";

console.log(RoleTree);
export interface IRoleTree {
  key: number;
  title: string;
  children: IRoleTree[];
  type: number;
  buttonList: Array<IRoleButton>;
}

export interface IRoleButton {
  key: number;
  title: string;
}
