/**********************************************************************
 *
 * kw/ctrl/kwCtrlProp.ts
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
import {kw }               from "@kw/kw";
import {kwCtrl }           from "./kwCtrl";
import {kwLog }            from "@kw/kwLog";
import {kwSt }             from "@kwStat/kwSt";



export abstract class kwCtrlProp extends kwCtrl
{


    protected constructor(
        src: kwSt,
        dst: kwSt,
        protected sProp: string )
    {
        super(src, dst);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


//@formatter:on

    protected init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (!super.init())
        {
            console.error(log.errInit("this"));
            return false;
        }

        if (!kw.isString(this.sProp))
        {
            console.error(log.errInit("sProp"));
            return false;
        }

        return true;
    }

    protected createObj(data: object): any
    {
        const log: kwLog = new kwLog(this.sClass, "createObj");
        //console.log(log.called());

        if (kw.isNull(data))
        {
            console.error(log.errInit("data"));
        }
        //console.info(log.isObj("src"), this.src);

        return data;
    }

    protected load(data: kwSt): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());

        if (kw.isNull(this.src))
        {
            console.error(log.invalid("src"));
        }
        //console.info(log.isObj("src"), this.src);

        if (!kw.isString(this.sProp))
        {
            console.error(log.errInit("sProp"));
            return false;
        }
        //console.info(this.sClass, "::load() sProp is [", this.sProp, "]");

        const val = this.src.get();
        if (!kw.isValid(val))
        {
            //console.debug(log.empty("val"));
            return false;
        }
        //console.info(log.isObj("val"), val);

        const prop = val[this.sProp];
        if (!kw.isValid(prop))
        {
            console.error(log.invalid("prop"));
            return false;
        }
        //console.info(log.isObj("src"), this.src);

        const obj = this.createObj(prop);
        if (!kw.isValid(obj))
        {
            console.error(log.errCreate("obj"));
            return false;
        }
        //console.info(log.isObj("src"), this.src);

        return super.load(obj);
    }

}
