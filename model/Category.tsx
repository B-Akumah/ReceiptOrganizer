export class Category {
  spaceId: string;
  categoryId: string;
  index: number;
  title: string;
  icon: string;
  constructor(spaceId: string,categoryId: string, index: number, title: string, icon: string) {
    this.spaceId = spaceId;
    this.categoryId = categoryId;
    this.index = index;
    this.title = title;
    this.icon = icon;
  }
}

export class CategoryItem {
  category: Category;
  isToggleDelete: boolean;

  constructor(category: Category, isToggleDelete: boolean) {
    this.category = category;
    this.isToggleDelete = isToggleDelete;
  }
}
