export interface SequenceFace {
    readonly current: number
    next(): SequenceFace
    next(steps: number): SequenceFace
    prev(): SequenceFace
    prev(steps: number): SequenceFace
}
