/**********************************************************************
 *
 * kw/class/msg/kwMsg.ts
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
import {kwAct }                    from "@kwClass/act/kwAct";
import {kwActs }                   from "@kwClass/acts/kwActs";
import {kwAjax }                   from "@kwClass/ajax/kwAjax";
import {kwApi }                    from "@kwClass/api/kwApi";
import {kwLog}                     from "@kw/kwLog";
import {kwMode }                   from "@kwClass/mode/kwMode";
import {kwHttpHelper }             from "@kw/http/kwHttpHelper";
import {kwHttpHelperMock }         from "@kw/http/kwHttpHelperMock";
import {kwMsgEnum }                from "./kwMsgEnum";
import {kwMsgSrvc }                from "./kwMsgSrvc";
import {kwMsgType }                from "./kwMsgType";
import {kwOptionsType}             from "@kwClass/options/kwOptionsType";
import {kwOptions }                from "@kwClass/options/kwOptions";
import {kwParam }                  from "@kwClass/param/kwParam";
import {kwSrvcs }                  from "@kwClass/srvcs/kwSrvcs";
import {kwTokens }                 from "@kwClass/tokens/kwTokens";
//@formatter:on


export abstract class kwMsg
{
    protected sClass: string = this.constructor.name;


    act:        kwAct;
    ajax:       kwAjax;
    api:        kwApi;
    data:       object;
    helper:     any;
    mode:       kwMode;
    options:    kwOptions;
    params:     object;
    srvcs:      kwSrvcs;
    tokens:     kwTokens;


    constructor(private nType: kwMsgEnum,
                private type: kwMsgType,)
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    abstract retrieveActImpl(acts: kwActs): kwAct;

    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (!kwMsgSrvc.in(this.nType))
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

        const api: kwApi = this.type.api;
        if (!kwApi.is(api))
        //if (!kw.isValid(api))
        {
            console.error(log.invalid("api"));
            return false;
        }
        //console.info(log.isObj("api"), api);
        this.api = api;

        const data: object = this.type.data;
        if ( kw.isNull(data))
        {
            //console.info(log.empty("data"));
        }
        //console.info(log.isObj("data"), data);
        this.data = data;

        const params: object = this.type.params;
        if (kw.isValid(params))
        {
            //console.info(log.isObj("params"), params);
            this.params = params;
        }

        const srvcs: kwSrvcs = this.type.srvcs;
        if ( kw.isNull(srvcs))
        {
            console.error(log.invalid("srvcs"));
            return false;
        }
        //console.info(log.isObj("srvcs"), srvcs);
        this.srvcs = srvcs;

        const tokens: kwTokens = this.type.tokens;
        if ( kw.isNull(tokens))
        {
            console.error(log.invalid("tokens"));
            return false;
        }
        //console.info(log.isObj("tokens"), tokens);
        this.tokens = tokens;

        if (!this.retrieveMode())
        {
            console.error(log.errLoad("mode"));
            return false;
        }

        if (!this.retrieveAct())
        {
            console.error(log.errLoad("act"));
            return false;
        }

        if (!this.retrieveAjax())
        {
            console.error(log.errLoad("ajax"));
            return false;
        }

        if (!this.createHelper())
        {
            console.error(log.errCreate("helper"));
            return false;
        }

        if (!this.createOptions())
        {
            console.error(log.errCreate("options"));
            return false;
        }

        return true
    }

    getData(): object
    {
        return this.data;
    }

    getAjax(): kwAjax
    {
        return this.ajax;
    }

    getHelper()
    {
        return this.helper;
    }

    getMode(): kwMode
    {
        return this.mode;
    }

    getOptions(): kwOptions
    {
        return this.options;
    }

    getSrvcs(): kwSrvcs
    {
        return this.srvcs;
    }

    getTokens(): kwTokens
    {
        return this.tokens;
    }

    getType(): kwMsgEnum
    {
        return this.nType;
    }

    isAdd(): boolean
    {
        return (this.nType === kwMsgEnum.add);
    }

    isDelete(): boolean
    {
        return (this.nType === kwMsgEnum.delete);
    }

    isEdit(): boolean
    {
        return (this.nType === kwMsgEnum.edit);
    }

    isGet(): boolean
    {
        return (this.nType === kwMsgEnum.get);
    }

    isLogin(): boolean
    {
        return (this.nType === kwMsgEnum.login);
    }

    isLogout(): boolean
    {
        return (this.nType === kwMsgEnum.logout);
    }

    isNull(): boolean
    {
        return (this.nType === kwMsgEnum.null);
    }

    createHelper(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createHelper");
        //console.log(log.called());

        if (!kwMode.is(this.mode))
        {
            console.error(log.invalid("mode"));
            return false;
        }
        //console.info(log.isObj("mode"), this.mode);

        this.helper = this.mode.isLive() ? kwHttpHelper : kwHttpHelperMock;

        return true;
    }

    createOptions(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createOptions");
        //console.log(log.called());

        if (!kwAct.is(this.act))
        {
            console.error(log.invalid("act"));
            return false;
        }
        //console.info(log.isObj("act"), this.act);

        if (!kwAjax.is(this.ajax))
        {
            console.error(log.invalid("ajax"));
            return false;
        }
        //console.info(log.isObj("ajax"), this.ajax);

        if ( kw.isNull(this.params))
        {
            //console.info(log.empty("params"));
        }
        //console.info(log.isObj("params"), this.params);

        if ( kw.isNull(this.srvcs))
        {
            console.error(log.invalid("srvcs"));
            return false;
        }
        //console.info(log.isObj("srvcs"), this.srvcs);

        if ( kw.isNull(this.tokens))
        {
            console.error(log.invalid("tokens"));
            return false;
        }
        //console.info(log.isObj("tokens"), this.tokens);

        if (!kwMode.is(this.mode))
        {
            console.error(log.invalid("mode"));
            return false;
        }
        //console.info(log.isObj("mode"), this.mode);

        const info: kwOptionsType = {
            act: this.act,
            ajax: this.ajax,
            data: this.data,
            params: this.params,
            mode: this.mode,
            srvcs: this.srvcs,
            tokens: this.tokens,
        }

        const options: kwOptions = new kwOptions(info);
        if (!options.init())
        {
            console.error(log.errInit("options"));
            return false;
        }
        //console.info(log.isObj("options"), options);
        this.options = options;

        return true;
    }

    retrieveAct(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveAct");
        //console.log(log.called());

        //if (!kwApi.is(this.api))
        if (!kw.isValid(this.api))
        {
            console.error(log.invalid("api"));
            return false;
        }
        //console.info(log.isObj("api"), this.api);

        const acts: kwActs = this.api.getActs();
        if (!kwActs.is(acts))
        {
            console.error(log.invalid("acts"));
            return false;
        }
        //console.info(log.isObj("acts"), acts);

        const act: kwAct = this.retrieveActImpl(acts);
        if (!kwAct.is(act))
        {
            console.error(log.invalid("act"));
            return false;
        }
        //console.info(log.isObj("act"), act);
        this.act = act;

        return true;
    }

    retrieveAjax(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveAjax");
        //console.log(log.called());

        if (!kwAct.is(this.act))
        {
            console.error(log.invalid("act"));
            return false;
        }

        if (!kwMode.is(this.mode))
        {
            console.error(log.invalid("mode"));
            return false;
        }

        const ajax: kwAjax = this.act.get(this.mode);
        if (!kwAjax.is(ajax))
        {
            console.error(log.invalid("ajax"));
            return false;
        }
        //console.info(log.isObj("ajax"), ajax);
        this.ajax = ajax;

        return true;
    }

    retrieveMode(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveMode");
        //console.log(log.called());

        if (!kwApi.is(this.api))
        //if (!kw.isValid(this.api))
        {
            console.error(log.invalid("api"));
            return false;
        }

        const mode: kwMode = this.api.getMode();
        if (!kwMode.is(mode))
        {
            console.error(log.invalid("mode"));
            return false;
        }
        //console.info(log.isObj("mode"), mode);
        this.mode = mode;

        return true;
    }

    toString(): string
    {
        return kw.toString(this.nType, kwMsgEnum);
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwMsg)
    }
}
