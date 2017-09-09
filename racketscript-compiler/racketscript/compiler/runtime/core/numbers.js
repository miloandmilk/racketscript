import * as $ from './lib.js';

/* Arithmetic */

export function add(...operands) {
    return [].reduce.call(operands, (a, b) => a + b, 0);
}

export function sub(...operands) {
    if (operands.length === 1) {
        return -operands[0];
    }
    let result = operands[0];
    for (let i = 1; i < operands.length; ++i) {
        result -= operands[i];
    }
    return result;
}

export function mul(...operands) {
    return [].reduce.call(operands, (a, b) => a * b, 1);
}

export function div(...operands) {
    if (operands.length === 1) {
        return 1 / operands[0];
    }
    let result = operands[0];
    for (let i = 1; i < operands.length; ++i) {
        result /= operands[i];
    }
    return result;
}

/* Comparison */

export function compare(cmp, operands) {
    if (operands.length < 2) {
        throw $.racketCoreError('compare {0}', 'atleast 2 arguments required');
    }
    for (let i = 1; i < operands.length; i++) {
        if (!cmp(operands[i - 1], operands[i])) {
            return false;
        }
    }
    return true;
}

export function lt(...operands) {
    return compare((a, b) => a < b, operands);
}

export function lte(...operands) {
    return compare((a, b) => a <= b, operands);
}

export function gt(...operands) {
    return compare((a, b) => a > b, operands);
}

export function gte(...operands) {
    return compare((a, b) => a >= b, operands);
}

export function equals(...operands) {
    return compare((a, b) => a === b, operands);
}

export function check(v) {
    return typeof v === 'number';
}
