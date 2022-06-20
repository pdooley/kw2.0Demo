/**********************************************************************
 *
 * kwUi/ctrl/kwCtrlSubView
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
import {kw}               from "@kw/kw";
import {kwCtrlSub}        from "@kwCtrl/kwCtrlSub";
import {kwLog}            from "@kw/kwLog";
import {kwMap}            from "@kwClass/kwMap";
import {kwUiStView}         from "@kwUiStat/kwUiStView";
import {kwStMap}          from "@kwStat/kwStMap";



export abstract class kwUiCtrlSubView extends kwCtrlSub
{

    protected constructor(
        src: kwStMap,
        dst: kwUiStView,
        private sProp: string )
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
            console.error(this.sClass, "::init() error");
            return false;
        }

        if (!kw.isString(this.sProp))
        {
            console.error(this.sClass, "::init() sProp is invalid");
            return false;
        }

        return true;
    }

    protected preLoad(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "preLoad");
        //console.log(log.called());


        if (!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return false;
        }
        //console.info(log.isObj("data"), data);


        const info: kwMap = <kwMap>data;
        if (!kwMap.is(info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), info);


        if (!kw.isString(this.sProp))
        {
            console.error(log.invalid("sProp"));
            return false;
        }
        //console.info(log.isObj("sProp"), this.sProp);


        const type = info.getByCode(this.sProp);
        if (!kw.isValid(type))
        {
            console.error(log.invalid("type"));
            return false;
        }
        //console.info(log.isObj("type"), type);


        return this.load(type);
    }
}
