export const romanToInt = (s: string): number => {
    /* init roman to int mapping values */
    const n: any = new Map(
        [
            ["I", 1],
            ["V", 5],
            ["X", 10],
            ["L", 50],
            ["C", 100],
            ["D", 500],
            ["M", 1000]] as const
    )

    /* reduce the string in reverse, if the current number 
    is less that the next number then subtract the int 
    value else add the int value. */
    return s.split("").reduceRight((a: number, b: any, i: number) => (n.get(s[i + 1]) > n.get(s[i])) ? a - n.get(s[i]) : a + n.get(b), 0)
};