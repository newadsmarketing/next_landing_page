export interface IProps {
  logo: string | any;
};

type IconsAndLinks = {
  path: string;
  icon: React.ReactNode
};

export type Data = {
  listIconsAndLinks: Array<IconsAndLinks>;
};
