export function findExpression(target) {
    const add4 = '+4';
    const mul2 = '*2';
    const plus = Number(add4[1]);
    const mult = Number(mul2[1]);

    function dfs(val, expr) {
        if (val > target) return undefined;
        if (val === target) return expr;

        let r = dfs(val * mult, expr + ' ' + mul2);
        if (r !== undefined) return r;

        r = dfs(val + plus, expr + ' ' + add4);
        if (r !== undefined) return r;

        return undefined;
    }

    return dfs(1, '1');
}
