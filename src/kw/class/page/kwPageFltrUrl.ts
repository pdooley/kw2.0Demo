/**********************************************************************
 *
 * kw/class/page/kwPageFltUrl.ts
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

import {kw}                         from "@kw/kw";
import {kwLog}                      from "@kw/kwLog";
import {kwPageEnum}                 from "@kwClass/page/kwPageEnum";
import {kwPageFltr}                 from "./kwPageFltr";
import {kwStVal}                    from "@kwStat/kwStVal";
import {kwPageType}                 from "@kwClass/page/kwPageType";


const nTYPE: kwPageEnum = kwPageEnum.fltrUrl;



export  class kwPageFltrUrl extends kwPageFltr
{


    public constructor(
        type: kwPageType    )
    {
        super(
            nTYPE,
            type     );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }



//@formatter:on

    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (!super.init())
        {
            console.error(log.errInit("this"));
            return false;
        }

        return true;
    }

    public destroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "destroy");
        //console.log(log.called());

        super.destroy();
    }

    protected loadFltr(val: kwStVal): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadFltr");
        //console.log(log.called());

        if (!kw.isValid(val))
        {
            //console.info(log.empty("val"));
            return true;
        }


        const fltr: any = val.get();
        if (!kw.isValid(fltr))
        {
            //console.info(log.invalid("fltr"));
            return false;
        }
        //console.info(log.isObj("fltr"), fltr);


        this.createMsg(fltr);

        return true;
    }

}
