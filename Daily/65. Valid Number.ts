function isNumber(s: string): boolean {
    return /^[+-]?((\d+\.\d*)|(\d*\.?\d+))([Ee][+-]?\d+)?$/.test(s);
};