const UNWANTED_ENCLOSURES_REGEX = /[\(\[\{][^\)\]\}]*[\)\]\}]/g;

/**
 * Regular expression matching special ASCII characters except space, plus some unicode special characters.
 * Applies after unwanted enclosures have been removed
 */
const UNWANTED_CHARS_REGEX = /[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g;

/** Regular expression matching one or more spaces. */
const MULTIPLE_WHITESPACES_REGEX = /\s+/g;

export const cleanupDisplayName = (displayName: string): string => {
  let cleanedDisplayName = displayName;
  cleanedDisplayName = cleanedDisplayName.replace(UNWANTED_ENCLOSURES_REGEX, '');
  cleanedDisplayName = cleanedDisplayName.replace(UNWANTED_CHARS_REGEX, '');
  cleanedDisplayName = cleanedDisplayName.replace(MULTIPLE_WHITESPACES_REGEX, ' ');
  cleanedDisplayName = cleanedDisplayName.trim();

  return cleanedDisplayName;
};
