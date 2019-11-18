import {Sequence} from './Sequence'

type SequenceCurrentValueCase = {value: number, expected: number, name: string};

const sequenceCurrentValueCases: SequenceCurrentValueCase[] = [
    {
        name: 'create',
        value: new Sequence(1, 10).current,
        expected: 1
    },
    {
        name: 'next',
        value: new Sequence(1, 10).next().current,
        expected: 2
    },
    {
        name: 'next use steps',
        value: new Sequence(1, 10).next(3).current,
        expected: 4
    },
    {
        name: 'prev',
        value: new Sequence(1, 10).next(3).prev().current,
        expected: 3
    },
    {
        name: 'prev use steps',
        value: new Sequence(1, 10).next(5).prev(2).current,
        expected: 4
    },
];

describe('Sequence current value', () => {
    sequenceCurrentValueCases.forEach(it => {
        test(it.name, () => {
            expect(it.value).toBe(it.expected);
        })
    });
});

test('Sequence iterator', () => {
    const arr = [...new Sequence(1,5)];
    expect(arr).toEqual([1, 2, 3, 4]);
    expect(arr.length).toBe(4);
    expect(arr[arr.length - 1]).toBe(4);
});
