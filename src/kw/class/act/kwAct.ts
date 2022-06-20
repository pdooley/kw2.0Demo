/**********************************************************************
 *
 * kw/class/act/kwAct.ts
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
import {kw }                       from "@kw/kw";
import {kwAjax }                   from "@kwClass/ajax/kwAjax";
import {kwAjaxEnum }               from "@kwClass/ajax/kwAjaxEnum";
import {kwFctyAjax }               from "@kwFcty/ajax/kwFctyAjax";
import {kwMode }                   from "@kwClass/mode/kwMode";

import {kwActEnum }                from "./kwActEnum";
import {kwActSrvc }                from "./kwActSrvc";
import {kwActType }                from "./kwActType";
import {kwLog} from "@kw/kwLog";

//@formatter:on

export class kwAct
{
    protected sClass: string = this.constructor.name;

    debug: kwAjax;
    live: kwAjax;

    constructor(    private nType: kwActEnum,
                    private type: kwActType  )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        if (!kwActSrvc.in(this.nType))
        {
            console.error(log.invalid("nType"));
            return false;
        }
        //console.info(log.is("nType", this.nType));

        if (kw.isNull(this.type))
        {
            console.error(log.invalid("type"));
            return false;
        }
        //console.info(log.isObj("type"), this.type);

        if (!this.retrieveDebug())
        {
            console.error(log.errLoad("debug"));
            return false;
        }

        if (!this.retrieveLive())
        {
            console.error(log.errLoad("debug"));
            return false;
        }

        return true;
    }

    get(mode: kwMode): kwAjax
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        if (!kwMode.is(mode))
        {
            console.error(log.invalid("mode"));
            return;
        }
        //console.info(log.isObj("mode"), mode);

        return mode.isDebug() ? this.debug : this.live;
    }

    getDebug()
    {
        return this.debug;
    }

    getLive()
    {
        return this.live;
    }

    getType(): kwActEnum
    {
        return this.nType;
    }

    isPost(): boolean
    {
        return (this.nType === kwActEnum.post);
    }

    isDelete(): boolean
    {
        return (this.nType === kwActEnum.delete);
    }

    isEdit(): boolean
    {
        return (this.nType === kwActEnum.update);
    }

    isGet(): boolean
    {
        return (this.nType === kwActEnum.get);
    }

    isLogin(): boolean
    {
        return (this.nType === kwActEnum.login);
    }

    isLogout(): boolean
    {
        return (this.nType === kwActEnum.logout);
    }

    toString(): string
    {
        return kw.toString(this.nType, kwActEnum);
    }

    retrieveDebug(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        if (kw.isNull(this.type))
        {
            console.error(log.invalid("type"));
            return false;
        }
        //console.info("kwAct::retrieveDebug() type is ", this.type);

        const debug: kwAjax = kwFctyAjax.create(this.type, kwAjaxEnum.debug);
        if (!kwAjax.is(debug))
        {
            console.error(log.invalid("debug"));
            return false;
        }
        //console.info(log.isObj("debug"), debug);
        this.debug = debug;

        return true;
    }

    retrieveLive(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        if (kw.isNull(this.type))
        {
            console.error(log.invalid("type"));
            return false;
        }
        //console.info(log.isObj("nType"), this.nType);

        const live: kwAjax = kwFctyAjax.create(this.type, kwAjaxEnum.live);
        if (!kwAjax.is(live))
        {
            console.error(log.invalid("live"));
            return false;
        }
        //console.info(log.isObj("live"), live);
        this.live = live;

        return true;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwAct)
    }

}

