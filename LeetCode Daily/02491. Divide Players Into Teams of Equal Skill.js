/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
    skill.sort((a, b) => a - b);

    let totalSkill = skill[0] + skill[skill.length - 1];
    let chemistrySum = 0;

    for (let i = 0; i < skill.length / 2; i++) {
        if (skill[i] + skill[skill.length - 1 - i] !== totalSkill) {
            return -1;
        }

        chemistrySum += skill[i] * skill[skill.length - 1 - i];
    }

    return chemistrySum;
};
