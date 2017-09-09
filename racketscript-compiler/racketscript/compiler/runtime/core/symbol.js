import { Primitive } from './primitive.js';
import { internedMake } from './lib.js';

class Symbol extends Primitive {
    constructor(v) {
        super();
        this.v = v;
        this._cachedHashCode = null;
    }

    toString() {
        return this.v;
    }

    toRawString() {
        return `'${this.v}`;
    }

    equals(v) {
        // Symbols are interned by default, and two symbols
        // with same name can't be unequal.
        // Eg. (define x (gensym)) ;;=> 'g60
        //     (equal? x 'g60)     ;;=> #f
        return v === this;
    }

    /**
     * @return {!number}
     */
    hashForEqual() {
        if (this._cachedHashCode === null) {
            this._cachedHashCode = super.hashForEqual();
        }
        return this._cachedHashCode;
    }
}


export const make = internedMake(v => new Symbol(v.toString()));

export const makeUninterned = v => new Symbol(v);

export function check(v) {
    return (v instanceof Symbol);
}
