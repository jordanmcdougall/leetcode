export const longestCommonPrefix = (strs: string[]): string => {
    // return an empty string if string has no lenght
    if (strs.length < 1) return ""

    // init prefix to be first word in array
    let prefix: string = strs[0]

    // loop through words 1 to n
    for (let i: number = 1; i < strs.length; i++) {
        // keep looping while the current word still has letters in common with prefix
        while (strs[i].indexOf(prefix) != 0) {
            // update the prefix to only include common letters between current word and prefix
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix.length < 1) return ""
        }
    }
    return prefix;
};