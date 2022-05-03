export interface MenuTree{
  title: string,
  logoUrl: string,
  mainMenuOptions: MainMenuOption[],
}

export interface MenuOption {
  label: string,
  icon: string,
  route?: string,
  hasSubMenu?: boolean,
  active?: boolean
}

export interface MainMenuOption extends MenuOption{
  subMenu?: MenuOption[]
}
