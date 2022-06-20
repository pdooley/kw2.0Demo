
/**********************************************************************
 *
 * kwUi/class/attr/kwInits.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
/*
import {kw}                from "@kw/kw";
import {kwAttrs}           from "@kwClass/attrs/kwAttrs";
import {kwDisp}            from "@kwClass/disp/kwDisp";
import {kwLog}             from "@kw/kwLog";



export class kwInits
{
    protected sClass: string = this.constructor.name;


    private _inits: any;

    private bInit: boolean          = false;
    private bLoadAttrs: boolean     = false;
    private bLoadInits: boolean     = false;
    private bLoadDisp: boolean      = false;

    private bDispAll: boolean       = false;
    private bDispInits: boolean     = false;


    constructor(
        private attrs:      kwAttrs,
        private disp:       kwDisp,
        private initsIn:    object )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    public get inits(): any { return this._inits; }



//@formatter:on


    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (this.bInit)
        {
            return;
        }

        this.bInit = true;

        if (!kw.isValid(this.attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.is("attrs", this.attrs));


        if (!kw.isValid(this.disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.is("disp", this.disp));


        if (!kw.isValid(this.initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.is("initsIn", this.initsIn));


        if (!this.loadDisp())
        {
            console.error(log.errLoad("disp"));
            return false;
        }


        if (!this.loadAttrs())
        {
            console.error(log.errLoad("attrs"));
            return false;
        }


        if (!this.loadInits())
        {
            console.error(log.errLoad("inits"));
            return false;
        }

        return true;
    }


    private loadAttrs(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadAttrs");
        //console.log(log.called());

        if (this.bLoadAttrs)
        {
            return;
        }

        this.bLoadAttrs = true;


        const attrs = this.attrs;
        if (!kw.isValid(attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs, "]");


        const initsIn = this.initsIn;
        if (!kw.isValid(initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.isObj("initsIn"), initsIn, "]");

        if (!attrs.loadInits(initsIn))
        {
            console.error(log.errLoad("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs, "]");

        return true;
    }

    private loadDisp(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadDisp");
        //console.log(log.called());

        if (this.bLoadDisp)
        {
            return;
        }

        this.bLoadDisp = true;

        const disp = this.disp;
        if (!kw.isValid(disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.isObj("disp"), disp, "]");

        const bDispAll = disp.bDispAll;
        if (!kw.isBoolean(bDispAll))
        {
            console.error(log.invalid("bDispAll"));
            return false;
        }
        //console.info(log.isObj("bDispAll"), bDispAll, "]");
        this.bDispAll = bDispAll;

        const bDispInits = disp.bDispInits;
        if (!kw.isBoolean(bDispInits))
        {
            console.error(log.invalid("bDispInits"));
            return false;
        }
        //console.info(log.isObj("bDispInits"), bDispInits, "]");
        this.bDispInits = bDispInits;

        return true;
    }

    private loadInits(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadInits");
        //console.log(log.called());

        if (this.bLoadInits)
        {
            return;
        }

        this.bLoadInits = true;

        if (!this.bLoadAttrs)
        {
            console.error(log.info("attrs not loaded"));
            return false;
        }

        const attrs = this.attrs;
        if (!kw.isValid(attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs, "]");


        const initsIn = this.initsIn;
        if (!kw.isValid(initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.isObj("initsIn"), initsIn, "]");


        const arry = this.attrs.arry;
        if (kw.isValid(arry))
        {
            //console.info(log.isObj("arry"), arry, "]");
            this.setInits(arry.val);
            return true;
        }


        const rec = this.attrs.rec;
        if (kw.isValid(rec))
        {
            //console.info(log.isObj("rec"), rec, "]");
            this.setInits(arry.val);
            return true;
        }


        this.setInits(initsIn);

        return true;
    }


    private setInits(val: any)
    {
        this._inits = val;
        this.dispInits();
    }


    private dispInits()
    {
        const log: kwLog = new kwLog(this.sClass, "dispInits");
        if (!this.bDispAll && !this.bDispInits ) {return;}
        const val = this.inits;
        if (kw.isValid(val)) {console.info(log.isObj("inits"), val, "]");}
    }

}
*/
