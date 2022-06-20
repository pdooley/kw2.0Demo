/**********************************************************************
 *
 * kw/class/page/kwPageFltr.ts
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
import {kw}                 from "@kw/kw";
import {kwLog}              from "@kw/kwLog";
import {kwMsg}              from "@kwClass/msg/kwMsg";
import {kwPage}             from "./kwPage";
import {kwPageEnum}         from "@kwClass/page/kwPageEnum";
import {kwPageType}         from "@kwClass/page/kwPageType";
import {kwStVal}            from "@kwStat/kwStVal";




export abstract class kwPageFltr extends kwPage
{



    protected constructor(
        nType:   kwPageEnum,
        type:    kwPageType    )
    {
        super(
            nType,
            type    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    protected abstract loadFltr(val?: kwStVal): boolean;


//@formatter:on


    protected createMsg(fltr?: kwStVal): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createMsg");
        //console.log(log.called());


        if (!kw.isValid(fltr))
        {
            //console.info(log.empty("fltr"));
            this.loadFltr();
            return true;
        }
        //console.info(log.is("fltr", fltr));


        if (kw.isNull(this.srvcFcty))
        {
            console.error(log.invalid("srvcFcty"));
            return false;
        }


        if (kw.isNull(this.srvcMsg))
        {
            console.error(log.invalid("srvcMsg"));
            return false;
        }


        const msg: kwMsg = this.srvcFcty.get(fltr);
        if (!kw.isValid(msg))
        {
            console.error(log.errCreate("msg"));
            return false;
        }
        //console.info(log.is("msg", msg));


        this.srvcMsg.val = msg;

        return true;
    }


}
