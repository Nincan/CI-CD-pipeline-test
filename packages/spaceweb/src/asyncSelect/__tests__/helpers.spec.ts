/**
 *  Created by Aneree on 14/12/20.
 */
import { getNoResultsMsg, addOptionsInMap } from '../helpers';

describe('AsyncSelect: helper', () => {
  describe('getNoResultsMsg', () => {
    test('When isLoading is true, it should return searchingText', async () => {
      expect(
        getNoResultsMsg({
          isLoading: true,
          minimumInput: 2,
          inputText: '',
          searchingText: 'Searching Animals',
          emptyInputMsg: 'Type to Search',
        })
      ).toBe('Searching Animals');
    });

    test("When isLoading is false, it should return  minimum input text if inputText doesn't satisfy minimumInput", async () => {
      expect(
        getNoResultsMsg({
          isLoading: false,
          minimumInput: 2,
          inputText: 'a',
          searchingText: 'Searching Animals',
          emptyInputMsg: 'Type to Search',
        })
      ).toBe('Type at least 2 characters to search');
    });

    test('When isLoading is false and inputText satisfies minimumInput and inputText is non-empty, it should return noResultsMsg', async () => {
      expect(
        getNoResultsMsg({
          isLoading: false,
          minimumInput: 2,
          inputText: 'are',
          noResultsMsg: 'No animals found',
          searchingText: 'Searching Animals',
          emptyInputMsg: 'Type to Search',
        })
      ).toBe('No animals found');
    });

    test('When isLoading is false and inputText satisfies minimumInput and inputText is empty, it should return emptyInputMsg', async () => {
      expect(
        getNoResultsMsg({
          isLoading: false,
          minimumInput: 0,
          inputText: '',
          noResultsMsg: 'No animals found',
          searchingText: 'Searching Animals',
          emptyInputMsg: 'Type to Search Animals',
        })
      ).toBe('Type to Search Animals');
    });
  });

  describe('addOptionsInMap', () => {
    test('Should return the same map with references of all options intact if no new options are being added', () => {
      const OPTION_PRESENT = {
          id: 'id1',
          label: 'label1',
        },
        OPTIONS_TO_ADD = [
          {
            id: 'id1',
            label: 'label1',
          },
        ],
        OPTIONS_MAP = {
          id1: OPTION_PRESENT,
        };

      const OUTPUT = addOptionsInMap(OPTIONS_MAP, OPTIONS_TO_ADD, 'id');

      expect(OUTPUT).toBe(OPTIONS_MAP);
      expect(OUTPUT.id1).toBe(OPTION_PRESENT);
      expect(OUTPUT.id1).not.toBe(OPTIONS_TO_ADD[0]);
    });

    test('Should return new map with references to existing options intact and newly added options if there exist some options that are not present in map and need to be added', () => {
      const OPTION_PRESENT = {
          id: 'id1',
          label: 'label1',
        },
        OPTIONS_TO_ADD = [
          {
            id: 'id1',
            label: 'label1',
          },
          {
            id: 'id2',
            label: 'label2',
          },
        ],
        OPTIONS_MAP = {
          id1: OPTION_PRESENT,
        };

      const OUTPUT = addOptionsInMap(OPTIONS_MAP, OPTIONS_TO_ADD, 'id');

      expect(OUTPUT).not.toBe(OPTIONS_MAP);
      expect(OUTPUT.id1).toBe(OPTION_PRESENT);
      expect(OUTPUT.id1).not.toBe(OPTIONS_TO_ADD[0]);
      expect(OUTPUT.id2).toBe(OPTIONS_TO_ADD[1]);
    });
  });
});
