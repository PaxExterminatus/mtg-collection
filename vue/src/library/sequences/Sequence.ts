import {
    SequenceFace,
    SequenceState,
    SequenceStateFace,
} from './'

class Sequence implements SequenceFace {
    protected state: SequenceStateFace;
    constructor(first: number, last: number, current: number = first) {
        this.state = new SequenceState(first, last, current);
    }

    // Sequences
    next(steps: number = 1): Sequence {
        for (let i = 0; i < steps; i += 1) {
            this.state.current += 1;
        }
        return this;
    }

    prev(steps: number = 1): Sequence {
        for (let i = 0; i < steps; i += 1) {
            this.state.current -= 1;
        }
        return this;
    }

    get current() {
        return this.state.current
    }

    protected get done() {
        return this.state.current === this.state.last
    }
    protected get value() {
        const value = this.current;
        this.next();
        return value;
    }
    [Symbol.iterator]() {
        return {
            next: () => {
                return this.done ? {done: this.done} : {value: this.value};
            }
        }
    }
}

export {
    Sequence,
    SequenceFace,
}

export default Sequence
