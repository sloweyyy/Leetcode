function simplifyPath(path: string): string {
    const stack: string[] = [];
    const dirs = path.split('/');
    for (let dir of dirs) {
        if (dir === '..') {
            stack.pop();
        } else if (dir && dir !== '.') {
            stack.push(dir);
        }
    }
    return '/' + stack.join('/');
};