export class Space {
  id: string;
  index: number;
  title: string;
  icon: string;
  constructor(id: string, index: number, title: string, icon: string) {
    this.id = id;
    this.index = index;
    this.title = title;
    this.icon = icon;
  }
}

export class SpaceItem {
  space: Space;
  isToggleDelete: boolean;

  constructor(space: Space, isToggleDelete: boolean) {
    this.space = space;
    this.isToggleDelete = isToggleDelete;
  }
}
