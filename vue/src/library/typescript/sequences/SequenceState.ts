import {SequenceStateFace} from '@/library/typescript/sequences/index'

class SequenceState implements SequenceStateFace {
    constructor(readonly first: number, readonly last: number, public current: number = first) {}
}

export {
    SequenceState,
}

export default SequenceState
