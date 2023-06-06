import { StyleObject } from '../types';

export const borderRadius = (value): StyleObject => ({
  borderTopRightRadius: value,
  borderTopLeftRadius: value,
  borderBottomRightRadius: value,
  borderBottomLeftRadius: value,
});

export const borderWidth = (value): StyleObject => ({
  borderTopWidth: value,
  borderRightWidth: value,
  borderBottomWidth: value,
  borderLeftWidth: value,
});

export const borderStyle = (value): StyleObject => ({
  borderTopStyle: value,
  borderBottomStyle: value,
  borderRightStyle: value,
  borderLeftStyle: value,
});

export const borderColor = (value): StyleObject => ({
  borderTopColor: value,
  borderRightColor: value,
  borderBottomColor: value,
  borderLeftColor: value,
});

export const padding = (value): StyleObject => ({
  paddingTop: value,
  paddingRight: value,
  paddingBottom: value,
  paddingLeft: value,
});

export const margin = (value): StyleObject => ({
  marginTop: value,
  marginRight: value,
  marginBottom: value,
  marginLeft: value,
});
