export type IconInfo = {
  id: string;
  tags: string;
  path: string;
  iconName: string;
  fileSize: number;
  category: string;
  renameTo?: string;
  shouldDelete: boolean;
  replaceWith?: string;
};

export type SvgConfig = {
  [iconId: string]: IconInfo;
};

export type IconMetadata = {
  name: string;
  fullName: string;
  path: string;
  tags: string[];
  category: string;
};
