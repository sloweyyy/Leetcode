function removeSubfolders(folder: string[]): string[] {
    folder.sort();
    const result = [];
    let prev = folder[0];
    result.push(prev);
    for (let i = 1; i < folder.length; i++) {
        if (!folder[i].startsWith(prev + "/")) {
            result.push(folder[i]);
            prev = folder[i];
        }
    }
    return result;
}
