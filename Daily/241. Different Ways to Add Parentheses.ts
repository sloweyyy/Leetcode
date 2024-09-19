function diffWaysToCompute(expression: string): number[] {
    const result: number[] = [];

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (char === '+' || char === '-' || char === '*') {
            const left = diffWaysToCompute(expression.slice(0, i));
            const right = diffWaysToCompute(expression.slice(i + 1));

            for (const l of left) {
                for (const r of right) {
                    if (char === '+') {
                        result.push(l + r);
                    } else if (char === '-') {
                        result.push(l - r);
                    } else {
                        result.push(l * r);
                    }
                }
            }
        }
    }

    if (result.length === 0) {
        result.push(parseInt(expression));
    }

    return result;
};