import { createContext, useContext } from 'react';

const CheatsheetContext = createContext({ keywordQuery: '' });

export const useCheatsheetContext = () => useContext(CheatsheetContext);

export default CheatsheetContext;
