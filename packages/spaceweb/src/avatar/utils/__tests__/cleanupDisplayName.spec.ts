import { cleanupDisplayName } from '../cleanupDisplayName';

describe('#cleanupDisplayName', () => {
  test('cleans up name with hyphens', () => {
    const result = cleanupDisplayName('Research Self-Serve');
    expect(result).toEqual('Research SelfServe');
  });

  test('cleans up name with parantheses in it', () => {
    const result = cleanupDisplayName('Sprinklr (India) Pvt');
    expect(result).toEqual('Sprinklr Pvt');
  });

  test('cleans up name with brackets in it', () => {
    const result = cleanupDisplayName('Sprinklr India [Pvt]');
    expect(result).toEqual('Sprinklr India');
  });

  test('cleans up name with curly braces in it', () => {
    const result = cleanupDisplayName('Sprinklr India {PVT}');
    expect(result).toEqual('Sprinklr India');
  });

  test('cleans up name with multiple parentheses, extra spaces, and unwanted characters braces in it', () => {
    const result = cleanupDisplayName(' !@#$%^&*()=+ (Sprinklr) India   (USA) `~<>,./?[]{}|   Germany   (UK)    ');
    expect(result).toEqual('India Germany');
  });

  test('cleans up phone number', () => {
    let result = cleanupDisplayName('12345678');
    expect(result).toEqual('12345678');

    result = cleanupDisplayName('+1 (555) 123-4567 ext.4567');
    expect(result).toEqual('1 1234567 ext4567');

    result = cleanupDisplayName('+47 12 34 56 78 (X 5678)');
    expect(result).toEqual('47 12 34 56 78');

    result = cleanupDisplayName('+47 12 34 56 78 (X 5678)');
    expect(result).toEqual('47 12 34 56 78');

    result = cleanupDisplayName('47 12 34');
    expect(result).toEqual('47 12 34');

    result = cleanupDisplayName('+91 1234567890');
    expect(result).toEqual('91 1234567890');
  });
});
