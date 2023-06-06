import { ReactElement } from 'react';

import { Paragraph } from '../../markdown-elements';
import { Card } from './Card';
import { useThemeContext } from '../../themeProperties';

export const DesignContent = (): ReactElement => {
  const { isDarkMode } = useThemeContext();
  const themeName = isDarkMode ? 'dark' : 'light';
  return (
    <>
      <Paragraph>
        System icons are designed to be simple and modern.
        <br />
        Each icon is reduced to its minimal form, expressing essential characteristics.
      </Paragraph>
      <Card
        title="Meaningful"
        thumbnailPosition="left"
        thumbnailSrc={`/spaceweb/resources/meaningful-${themeName}.svg`}
      >
        The icon used in the interface should have its meaning and function. Without it, an icon is just a kind of empty
        stub, making the layout of the screen or web page dirty with the unnecessary elements.
      </Card>
      <Card
        title="Recognisable"
        thumbnailPosition="left"
        thumbnailSrc={`/spaceweb/resources/recognisable-${themeName}.svg`}
      >
        To make the icon recognisable, the designer needs to become a researcher before creating the icon. Taking the
        time for exploration and analysis of the existing icons and thorough investigation of the competition can create
        the significant basis of making the icon easily remembered and catchy.
      </Card>
      <Card title="Minimal" thumbnailPosition="left" thumbnailSrc={`/spaceweb/resources/minimal-${themeName}.svg`}>
        The icon should not have to many forms in itself. Too many details can make an icon confusing or unreadable.
        Strive for a simple, universal design that most people will recognise quickly and won’t find offensive.
      </Card>
      <Card
        title="Consistent"
        thumbnailPosition="left"
        thumbnailSrc={`/spaceweb/resources/consistent-${themeName}.svg`}
      >
        Icons as well as the other elements of layout have to feel consistent as they often become the most powerful
        conventions and signifiers. For instance, if there are several icons in the app — as it usually happens — they
        should follow the same style, concept and correspond to the general design solution for the app, supporting the
        harmony of visual representation and interaction instead of breaking it with non-consistent elements.
      </Card>
      <Card title="Icon Usage">
        Different icon styles are used in different space components. We have four major types of icons based on their
        usage and functions.
      </Card>
      <Card title="Platform Icons" thumbnailPosition="bottom" thumbnailSrc="/spaceweb/resources/platform-icons.png">
        Platform icons are used as interactive elements in a space component that triggers an action. We use platform
        icons of five different sizes 12px, 14px, 16px, 20px & 24px.
      </Card>
      <Card title="Module Icons" thumbnailPosition="bottom" thumbnailSrc="/spaceweb/resources/module-icons.png">
        Module icons are used in the tabs of the universal bar as well as on the launchpad to represent the product.
      </Card>
      <Card title="Cloud Icons" thumbnailPosition="bottom" thumbnailSrc="/spaceweb/resources/cloud-icons.png">
        Cloud icons are used represent different sprinklr cloud offerings only in the Launchpad.
      </Card>
      <Card title="Channel Icons" thumbnailPosition="bottom" thumbnailSrc="/spaceweb/resources/channel-icons.png">
        Channel icons are used represent different social media channel accounts in Sprinlr.
      </Card>
    </>
  );
};
