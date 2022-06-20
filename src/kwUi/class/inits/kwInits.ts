
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

import {kw}                from "@kw/kw";
import {kwAttrs}           from "@kwUiClass/attrs/kwAttrs";
import {kwDisp}            from "@kwUiClass/disp/kwDisp";
import {kwLog}             from "@kw/kwLog";
import {kwtInits}            from "./kwtInits";



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


    // passed values in constructor
    private attrsIn:    kwAttrs;
    private dispIn:     kwDisp;
    private initsIn:    object;


    constructor(
        private type: kwtInits   )
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


        if (!kw.isValid(this.type))
        {
            console.error(log.invalid("type"));
            return false;
        }
        //console.info(log.isObj("type"), this.type);


        this.attrsIn = this.type.attrs;
        if (!kw.isValid(this.attrsIn))
        {
            console.error(log.invalid("attrsIn"));
            return false;
        }
        //console.info(log.isObj("attrsIn"), this.attrsIn);


        this.dispIn = this.type.disp;
        if (!kw.isValid(this.dispIn))
        {
            console.error(log.invalid("dispIn"));
            return false;
        }
        //console.info(log.isObj("dispIn"), this.dispIn);


        this.initsIn = this.type.inits;
        if (!kw.isValid(this.initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.isObj("initsIn"), this.initsIn);


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


        this.bInit = true;

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


        if (!kw.isValid(this.attrsIn))
        {
            console.error(log.invalid("attrsIn"));
            return false;
        }
        //console.info(log.isObj("attrsIn"), this.attrsIn);


        if (!kw.isValid(this.initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.isObj("initsIn"), this.initsIn);


        if (!this.attrsIn.loadInits(this.initsIn))
        {
            console.error(log.errLoad("attrsIn"));
            return false;
        }
        //console.info(log.isObj("attrsIn"), this.attrsIn);


        this.bLoadAttrs = true;

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


        if (!kw.isValid(this.dispIn))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.isObj("disp"), this.dispIn);


        this.bDispAll = this.dispIn.bDispAll;
        if (!kw.isBoolean(this.bDispAll))
        {
            console.error(log.invalid("bDispAll"));
            return false;
        }
        //console.info(log.isObj("bDispAll"), this.bDispAll);


        this.bDispInits = this.dispIn.bDispInits;
        if (!kw.isBoolean(this.bDispInits))
        {
            console.error(log.invalid("bDispInits"));
            return false;
        }
        //console.info(log.isObj("bDispInits"), this.bDispInits);


        this.bLoadDisp = true;

        return true;
    }

    private loadInits(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadInits");
        //console.log(log.called());

        if (this.bLoadInits)
        {
            return true;
        }


        if (!this.bLoadAttrs)
        {
            console.error(log.info("attrs not loaded"));
            return false;
        }


        if (!kw.isValid(this.attrsIn))
        {
            console.error(log.invalid("attrsIn"));
            return false;
        }
        //console.info(log.isObj("attrsIn"), this.attrsIn);


        if (!kw.isValid(this.initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.isObj("initsIn"), this.initsIn);


        const arry = this.attrsIn.arry;
        if (kw.isValid(arry))
        {
            //console.info(log.isObj("arry"), arry);
            const val = arry.val;
            if (kw.isValid(val))
            {
                //console.info(log.isObj("val"), val);
                this.setInits(val);
                return true;
            }
        }


        const rec = this.attrsIn.rec;
        if (kw.isValid(rec))
        {
            //console.info(log.isObj("rec"), rec);
            const val = rec.val;
            if (kw.isValid(val))
            {
                //console.info(log.isObj("val"), val);
                this.setInits(val);
                return true;
            }
        }


        this.setInits(this.initsIn);


        this.bLoadInits = true;

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
        if ( !this.bDispAll && !this.bDispInits ) {return;}
        const val = this.inits;
        if (kw.isValid(val)) {console.info(log.isObj("inits"), val, "]");}
    }

}
