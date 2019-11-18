import Sequence from '../sequences';

class WindowsTabTrap {
    private seq: Sequence;
    constructor(private items : NodeListOf<Element>) {
        this.seq = new Sequence(1, items.length - 1);
    }
}

export {WindowsTabTrap}
export default WindowsTabTrap
