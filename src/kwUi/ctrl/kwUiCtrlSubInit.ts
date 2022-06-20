/**********************************************************************
 *
 * kwUi/ctrl/kwUiCtrlSubInit
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
import {kwCtrlSub}          from "@kwCtrl/kwCtrlSub";
import {kwInit}             from "../class/init/kwInit";
import {kwInitType}         from "../class/init/kwInitType";
import {kwLog}              from "@kw/kwLog";
import {kwMap}              from "@kwClass/kwMap";
import {kwSt}               from "@kwStat/kwSt";
import {kwUiStInit}           from "@kwUiStat/kwUiStInit";



export abstract class kwUiCtrlSubInit extends kwCtrlSub
{

    protected constructor(
        src: kwSt,
        dst: kwUiStInit,
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


        const val = info.getByCode(this.sProp);
        if (!kw.isValid(val))
        {
            //console.info(log.isObj("sProp"), this.sProp);
            console.error(log.invalid("val"));
            return false;
        }
        //console.info(log.isObj("val"), val);


        return this.load(val);
    }

}
