import {SequenceStateFace} from './'

class SequenceState implements SequenceStateFace {
    constructor(readonly first: number, readonly last: number, public current: number = first) {}
}

export {
    SequenceState,
}

export default SequenceState
