/**
 * Calculates the healths of robots that survived after collisions.
 *
 * @param {number[]} positions - The positions of the robots.
 * @param {number[]} healths - The healths of the robots.
 * @param {string} directions - The directions of the robots.
 * @return {number[]} - The healths of the survived robots.
 */
const survivedRobotsHealths = (positions, healths, directions) => {
    const n = positions.length;
    const robots = [];

    for (let i = 0; i < n; i++) {
        robots.push([positions[i], healths[i], directions[i], i]);
    }

    robots.sort((a, b) => a[0] - b[0]);

    const stack = [];

    for (const robot of robots) {
        if (
            robot[2] === "R" ||
            stack.length === 0 ||
            stack[stack.length - 1][2] === "L"
        ) {
            stack.push(robot);
            continue;
        }

        if (robot[2] === "L") {
            let add = true;
            while (
                stack.length > 0 &&
                stack[stack.length - 1][2] === "R" &&
                add
            ) {
                const lastHealth = stack[stack.length - 1][1];
                if (robot[1] > lastHealth) {
                    stack.pop();
                    robot[1] -= 1;
                } else if (robot[1] < lastHealth) {
                    stack[stack.length - 1][1] -= 1;
                    add = false;
                } else {
                    stack.pop();
                    add = false;
                }
            }

            if (add) {
                stack.push(robot);
            }
        }
    }

    stack.sort((a, b) => a[3] - b[3]);

    const result = stack.map((robot) => robot[1]);

    return result;
};
