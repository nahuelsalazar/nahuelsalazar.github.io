export interface NavItem {
  label: string;
  href: string;
}

export interface NavItemWithIcon extends NavItem {
  number: string;
  icon: Component;
}
