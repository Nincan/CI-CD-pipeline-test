import {
  createContext,
  useMemo,
  useState,
  useCallback,
  useContext,
  useRef,
  ReactElement,
  PropsWithChildren,
} from 'react';
import { ContextMenuInfo, ContextValue } from './types';

export const NestedMenuContext = createContext<ContextValue>({});
NestedMenuContext.displayName = 'NestedMenuContext';
export const useNestedMenuContext = () => useContext(NestedMenuContext);

const NestedMenuProvider = ({ children }: PropsWithChildren<{}>): ReactElement => {
  const [menus, setMenus] = useState<ContextMenuInfo[]>([]);
  // storing menus in ref, to remove dependencies for getMenuInfo
  const menusRef = useRef(menus);
  menusRef.current = menus;

  const registerMenu: ContextValue['registerMenu'] = useCallback(menuInfo => {
    setMenus(_menus => _menus.concat(menuInfo));
  }, []);
  const unregisterMenu: ContextValue['unregisterMenu'] = useCallback(ref => {
    setMenus(_menus => {
      const index = _menus.findIndex(({ menuRef }) => ref === menuRef);
      if (index !== -1) {
        // also unregister child menus if not already
        return _menus.slice(0, index);
      }
      return _menus;
    });
  }, []);
  const getMenuInfo: ContextValue['getMenuInfo'] = useCallback(ref => {
    const _menus = menusRef.current;
    const index = _menus.findIndex(({ menuRef }) => ref === menuRef);
    return _menus[index];
  }, []);
  const getChildMenuInfo: ContextValue['getChildMenuInfo'] = useCallback(ref => {
    const _menus = menusRef.current;
    const index = _menus.findIndex(({ menuRef }) => ref === menuRef);
    return _menus[index + 1];
  }, []);
  const getParentMenuInfo: ContextValue['getParentMenuInfo'] = useCallback(ref => {
    const _menus = menusRef.current;
    const index = _menus.findIndex(({ menuRef }) => ref === menuRef);
    return _menus[index - 1];
  }, []);
  const getRootMenuInfo: ContextValue['getRootMenuInfo'] = useCallback(() => {
    const _menus = menusRef.current;
    return _menus[0];
  }, []);

  const contextValue = useMemo(
    () => ({
      registerMenu,
      unregisterMenu,
      getMenuInfo,
      getChildMenuInfo,
      getParentMenuInfo,
      getRootMenuInfo,
    }),
    [registerMenu, unregisterMenu, getMenuInfo, getChildMenuInfo, getParentMenuInfo, getRootMenuInfo]
  );
  return <NestedMenuContext.Provider value={contextValue}>{children}</NestedMenuContext.Provider>;
};
NestedMenuProvider.displayName = 'NestedMenuProvider';

export default NestedMenuProvider;
