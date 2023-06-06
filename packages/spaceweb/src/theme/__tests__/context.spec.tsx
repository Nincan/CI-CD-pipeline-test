import { cleanup, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import _merge from 'lodash/merge';
import * as React from 'react';
import { hyperspaceDark, hyperspaceLight, sprDark, sprLight } from '../../test-utils/test-provider/testableThemes';
import { TestProvider, getCSSByTestId } from '../../test-utils/test-provider';

import { Box } from '../../box';
import { hex2rgb } from '../../helpers';
import { Modal, ModalBody, ModalHeader } from '../../modal';
import { ThemeProvider } from '../Provider';
import { useTheme } from '../context';

const ModalWithCustomTheme = (): React.ReactElement => {
  const [modalContainerElement, setModalContainerElement] = React.useState(null);
  return (
    <ThemeProvider containerElement={modalContainerElement} theme={hyperspaceDark}>
      <Modal
        isOpen
        overrides={{
          Root: { props: { ref: setModalContainerElement, id: 'custom-theme-modal' } },
        }}
      >
        <ModalHeader noBorder>Hello world</ModalHeader>
        <ModalBody>
          Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl. Maecenas
          aliquet mauris ut tempus.
        </ModalBody>
      </Modal>
    </ThemeProvider>
  );
};

describe('themeContext', function () {
  beforeEach(() => {
    cleanup();
    // react-testing-library's cleanup is not enough to clear everything
    // reset all the HTML content
    document.documentElement.innerHTML = '';
    // reset classes applied to documentElement
    document.documentElement.removeAttribute('class');
  });
  describe('useTheme', function () {
    describe('merge theme behavior', function () {
      describe('themeNames are different', function () {
        test('theme should not be merged and newTheme should be overridden completely', () => {
          const themeToOverride = {
            direction: 'rtl' as const,
            classes: {},
            theme: { name: 'dark-theme', spr: { ui01: 'red' } },
          };
          const { result } = renderHook(useTheme, {
            wrapper: ({ children }) => (
              <TestProvider theme={sprLight}>
                <ThemeProvider theme={themeToOverride}>{children}</ThemeProvider>
              </TestProvider>
            ),
          });
          expect(result.current).toEqual(themeToOverride);
        });
        test('if direction is not present in newTheme, direction of outerTheme should be present as fallback.', () => {
          const themeToOverride = { classes: {}, theme: { name: 'dark-theme', spr: { ui01: 'red' } } };
          const { result } = renderHook(useTheme, {
            wrapper: ({ children }) => (
              <TestProvider theme={sprLight} direction="rtl">
                <ThemeProvider theme={themeToOverride}>{children}</ThemeProvider>
              </TestProvider>
            ),
          });
          expect(result.current).toEqual({ direction: 'rtl', ...themeToOverride });
        });
      });

      test('theme should be merged with outerTheme if themeName is not present in ThemeToOverride.', () => {
        const themeToOverride = { theme: { spr: { ui01: 'red' } } };
        const { result } = renderHook(useTheme, {
          wrapper: ({ children }) => (
            <TestProvider theme={sprLight}>
              <ThemeProvider theme={themeToOverride}>{children}</ThemeProvider>
            </TestProvider>
          ),
        });
        expect(result.current).toEqual(expect.objectContaining(_merge({}, sprLight, themeToOverride)));
      });
      test('theme density should be overridable.', () => {
        const themeToOverride = { theme: { density: 'COMPACT' as const } };
        const { result } = renderHook(useTheme, {
          wrapper: ({ children }) => (
            <TestProvider theme={sprLight}>
              <ThemeProvider theme={themeToOverride}>{children}</ThemeProvider>
            </TestProvider>
          ),
        });
        expect(result.current).toEqual(expect.objectContaining(_merge({}, sprLight, themeToOverride)));
      });
      test('density passed to ThemeProvider should be added to theme object.', () => {
        const { result } = renderHook(useTheme, {
          wrapper: ({ children }) => (
            <TestProvider>
              <ThemeProvider density="COMPACT">{children}</ThemeProvider>
            </TestProvider>
          ),
        });
        expect(result.current.theme.density).toBe('COMPACT');
      });
      test('density passed to ThemeProvider should take preference on theme.density.', () => {
        const themeToOverride = { theme: { density: 'COMFORTABLE' as const } };
        const { result } = renderHook(useTheme, {
          wrapper: ({ children }) => (
            <TestProvider>
              <ThemeProvider theme={themeToOverride} density="COMPACT">
                {children}
              </ThemeProvider>
            </TestProvider>
          ),
        });
        expect(result.current.theme.density).toBe('COMPACT');
      });
      test('theme should be merged with outerTheme if themeNames are same.', () => {
        const themeToOverride = { theme: { name: sprLight.theme.name, spr: { ui01: 'red' } } };
        const { result } = renderHook(useTheme, {
          wrapper: ({ children }) => (
            <TestProvider theme={sprLight}>
              <ThemeProvider theme={themeToOverride}>{children}</ThemeProvider>
            </TestProvider>
          ),
        });
        expect(result.current).toEqual(expect.objectContaining(_merge({}, sprLight, themeToOverride)));
      });
    });
  });
  describe('ThemeProvider', function () {
    test('override theme using ThemeProvider', () => {
      render(
        <TestProvider theme={sprLight}>
          <Box data-testid="box1" className="spr-text-04" style={({ theme }) => ({ backgroundColor: theme.spr.ui04 })}>
            Box 1
          </Box>
          <ThemeProvider theme={hyperspaceLight}>
            <Box
              data-testid="box2"
              className="spr-text-03"
              style={({ theme }) => ({ backgroundColor: theme.spr.ui04 })}
            >
              Box 2
            </Box>
          </ThemeProvider>
        </TestProvider>
      );
      const css1 = getCSSByTestId('box1');
      const css2 = getCSSByTestId('box2');
      expect(css1.color).toBe(hex2rgb(sprLight.theme.spr.text04));
      expect(css1.backgroundColor).toBe(hex2rgb(sprLight.theme.spr.ui04));
      expect(css2.color).toBe(hex2rgb(hyperspaceLight.theme.spr.text03));
      expect(css2.backgroundColor).toBe(hex2rgb(hyperspaceLight.theme.spr.ui04));
    });
    test('should be able to override theme through a callbackFn', () => {
      const themeMergerCallback = jest.fn(oldTheme =>
        _merge({}, oldTheme, {
          classes: { 'spr-ui-01': { backgroundColor: '#cccccc' } },
          theme: { spr: { ui01: { backgroundColor: '#cccccc' } } },
        })
      );

      render(
        <TestProvider theme={sprDark}>
          <ThemeProvider theme={themeMergerCallback}>
            <Box data-testid="box1" className="spr-ui-01">
              Box 1
            </Box>
          </ThemeProvider>
        </TestProvider>
      );
      const css1 = getCSSByTestId('box1');
      expect(css1.backgroundColor).toBe(hex2rgb('#cccccc'));
      expect(themeMergerCallback).toHaveBeenCalledTimes(1);
    });
    describe('className mutation behavior', () => {
      test('should add themeName as class to provided containerElement.', () => {
        render(
          <ThemeProvider theme={hyperspaceLight} containerElement={document.documentElement}>
            <div />
          </ThemeProvider>
        );
        expect(document.documentElement.classList).toContain('hyperspace-light');
      });
      test('should remove prev themeName and add new themeName when theme is changed.', () => {
        const { rerender } = render(
          <ThemeProvider theme={hyperspaceLight} containerElement={document.documentElement}>
            <div />
          </ThemeProvider>
        );
        expect(document.documentElement.classList).toContain('hyperspace-light');
        rerender(
          <ThemeProvider theme={sprDark} containerElement={document.documentElement}>
            <div />
          </ThemeProvider>
        );
        expect(document.documentElement.classList).toContain('space-dark');
        expect(document.documentElement.classList).not.toContain('hyperspace-light');
      });
      test('should not remove themeName even if one of the ThemeProvider unmounts.', () => {
        render(
          <ThemeProvider theme={hyperspaceLight} containerElement={document.documentElement}>
            <div />
          </ThemeProvider>
        );
        const { unmount } = render(
          <ThemeProvider theme={hyperspaceLight} containerElement={document.documentElement}>
            <div />
          </ThemeProvider>
        );
        expect(document.documentElement.classList).toContain('hyperspace-light');
        unmount();
        expect(document.documentElement.classList).toContain('hyperspace-light');
      });
      test('should not change themeName if new theme object does not have themeName in it.', () => {
        render(
          <ThemeProvider theme={hyperspaceLight} containerElement={document.documentElement}>
            <ThemeProvider theme={{ theme: { spr: { ui01: 'red' } } }} containerElement={document.documentElement}>
              <div />
            </ThemeProvider>
          </ThemeProvider>
        );
        expect(document.documentElement.classList).toContain('hyperspace-light');
      });
      test('if different containerElements are provided, themeName change in one should not effect the other one.', () => {
        render(
          <ThemeProvider theme={hyperspaceLight} containerElement={document.documentElement}>
            <div>Hyperspace Light Theme</div>
            <ThemeProvider theme={hyperspaceDark} containerElement={document.body}>
              <div>Hyperspace Dark Theme</div>
            </ThemeProvider>
          </ThemeProvider>
        );
        expect(document.documentElement.classList).toContain('hyperspace-light');
        expect(document.body.classList).toContain('hyperspace-dark');
      });
      test('if containerElement changes, it should remove class from previous container and apply class to new container.', () => {
        const { rerender } = render(
          <ThemeProvider theme={hyperspaceLight} containerElement={document.documentElement}>
            <div />
          </ThemeProvider>
        );
        expect(document.documentElement.classList).toContain('hyperspace-light');
        expect(document.body.classList).not.toContain('hyperspace-light');
        rerender(
          <ThemeProvider theme={hyperspaceLight} containerElement={document.body}>
            <div />
          </ThemeProvider>
        );
        expect(document.documentElement.classList).not.toContain('hyperspace-light');
        expect(document.body.classList).toContain('hyperspace-light');
      });
      test('Integration test with custom theme container.', () => {
        render(
          <TestProvider theme={hyperspaceLight}>
            <ModalWithCustomTheme />
          </TestProvider>
        );
        expect(document.documentElement.attributes['class'].value).toBe('hyperspace-light');
        expect(document.documentElement.classList).not.toContain('hyperspace-dark');
        const modalElement = document.getElementById('custom-theme-modal')!;
        expect(modalElement.classList).toContain('hyperspace-dark');
        expect(modalElement.classList).not.toContain('hyperspace-light');
      });
    });
  });
});
