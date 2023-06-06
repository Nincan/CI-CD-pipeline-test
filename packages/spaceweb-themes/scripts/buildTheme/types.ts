export type ThemeConfig = {
  name?: string;
  htmlFontSize: string;
  density: 'COMPACT' | 'COMFORTABLE';
  theme: Record<string, any>;
  future?: Record<string, any>;
  variants?: any;
};

export type ThemeFileInfo = { name: string; input: string; output: string };

export type TailwindPlugin = (args: unknown) => void;
