class VueProp {
    private tp: any;
    private req = false;
    private def: any;

    get string() {
        this.tp = String;
        return this;
    }

    get number() {
        this.tp = Number;
        return this;
    }

    get required() {
        this.req = true;
        return this;
    }

    type(type: any) {
        this.tp = type;
        return this;
    }

    default(v: any) {
        this.def = v;
        return this;
    };

    get get() {
        return {
            type: this.tp,
            required: this.req,
            default: this.def,
        }
    }
}

const prop = new VueProp();

export {
    prop,
    VueProp,
}
