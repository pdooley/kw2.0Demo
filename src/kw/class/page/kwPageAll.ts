/**********************************************************************
 *
 * kw/class/page/kwPageAll.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {kw}                 from "@kw/kw";
import {kwLog}              from "@kw/kwLog";
import {kwMsg}              from "@kwClass/msg/kwMsg";
import {kwPage}             from "./kwPage";
import {kwPageEnum}         from "@kwClass/page/kwPageEnum";
import {kwPageType}         from "@kwClass/page/kwPageType";

const nTYPE: kwPageEnum = kwPageEnum.all;


export class kwPageAll extends kwPage
{

    public constructor(
        type: kwPageType    )
    {
        super(
            nTYPE,
            type    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


//@formatter:on

    protected createMsg(fltr?: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createMsg");
        //console.log(log.called());


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


        const msg: kwMsg = this.srvcFcty.all();
        if (!kw.isValid(msg))
        {
            console.error(log.errCreate("msg"));
            return false;
        }
        //console.info(log.isObj("msg"), msg);

        this.srvcMsg.val = msg;

        return true;
    }

}
