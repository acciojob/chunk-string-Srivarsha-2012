function chunkString(str, size) {
    // Handle null input
    if (str === null) return [];

    let result = [];

    for (let i = 0; i < str.length; i += size) {
        result.push(str.slice(i, i + size));
    }

    return result;
}