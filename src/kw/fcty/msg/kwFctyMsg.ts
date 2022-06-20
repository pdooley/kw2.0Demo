/**********************************************************************
 *
 * kw/fcty/msg/kwFctyMsg
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import {kw }                       from '@kw/kw';
import {kwApi }                    from "@kwClass/api/kwApi";
import {kwLog }                    from '@kw/kwLog';
import {kwMsg }                    from "@kwClass/msg/kwMsg";
import {kwMsgAll }                 from "@kwClass/msg/kwMsgAll";
import {kwMsgAdd }                 from "@kwClass/msg/kwMsgAdd";
import {kwMsgDelete }              from "@kwClass/msg/kwMsgDelete";
import {kwMsgEdit }                from "@kwClass/msg/kwMsgEdit";
import {kwMsgGet }                 from "@kwClass/msg/kwMsgGet";
import {kwMsgType }                from "@kwClass/msg/kwMsgType";
import {kwSrvcs }                  from "@kwClass/srvcs/kwSrvcs";
import {kwStApi }                  from "@kwStat/kwStApi";
import {kwStObj}                   from "@kwStat/kwStObj";
import {kwTokens }                 from "@kwClass/tokens/kwTokens";
//@formatter:off


export class kwFctyMsg
{
    protected sClass: string = this.constructor.name;

    api: kwApi;
    srvcs: kwSrvcs;
    tokens: kwTokens;

    constructor(
        private srvcApi: kwStApi,
        private srvcSrvcs: kwStObj,
        private srvcTokens: kwStObj    )
    {
        //console.log(this.sClass, "::constructor() is called.");
    }

    init(): boolean
    {
        //console.log(this.sClass, "::init() called.");

        if (    kwApi.is(this.api)
        &&      kwSrvcs.is(this.srvcs)
        &&      kwTokens.is(this.tokens)   )
        {
            return true;
        }

        if (!kwStApi.is(this.srvcApi))
        {
            console.error(this.sClass, "::init() srvcApi is invalid.");
            return false;
        }

        if (!kwStObj.is(this.srvcSrvcs))
        {
            console.error(this.sClass, "::init() srvcSrvcs is invalid.");
            return false;
        }

        if (!kwStObj.is(this.srvcTokens))
        {
            console.error(this.sClass, "::init() srvcTokens is invalid.");
            return false;
        }

        let api: kwApi = <kwApi>this.srvcApi.get();
        if (!kwApi.is(api))
        {
            console.error(this.sClass, "::init() api is invalid.");
            const val = kwApi.is(api);
            return;
        }
        this.api = api;

        const srvcs: kwSrvcs = <kwSrvcs>this.srvcSrvcs.get();
        if (!kw.isValid(srvcs))
        {
            console.error(this.sClass, "::init() srvcs is invalid.");
            return false;
        }
        this.srvcs = srvcs;

        const tokens: kwTokens = <kwTokens>this.srvcTokens.get();
        if (!kw.isValid(tokens))
        {
            console.error(this.sClass, "::init() tokens is invalid.");
            return false;
        }
        this.tokens = tokens;

        return true;
    }

    add(data: object): kwMsg
    {
        //console.log(this.sClass, "::add() called.");

        if (!this.init())
        {
            console.error(this.sClass, "::add() error initializing.");
            return;
        }

        if (kw.isNull(data))
        {
            console.error(this.sClass, "::add() data is invalid.");
            return;
        }


        const type: kwMsgType = {
            api: this.api,
            data: data,
            srvcs: this.srvcs,
            tokens: this.tokens,
        }

        const msg: kwMsg = new kwMsgAdd(type);
        if (!msg.init())
        {
            console.error(this.sClass, "::add() error creating msg.");
            return;
        }

        return msg;
    }


    all(params?: any): kwMsg
    {
        const log: kwLog = new kwLog("kwFctyMsg", "all");
        //console.log(log.called());

        if (!this.init())
        {
            console.error(this.sClass, "::all() error initializing.");
            return;
        }

        if (kw.isArray(params))
        {
            //console.info(log.isObj("params"), params);
        }


        const type: kwMsgType = {
            api: this.api,
            data: null,
            params: params,
            srvcs: this.srvcs,
            tokens: this.tokens,
        };

        const msg: kwMsg = new kwMsgAll(type);
        if (!msg.init())
        {
            console.error(this.sClass, "::get() error creating msg.");
            return;
        }

        return msg;
    }

    del(params: object): kwMsg
    {
        //console.log(this.sClass, "::del() called.");

        if (!this.init())
        {
            console.error(this.sClass, "::del() error initializing.");
            return;
        }

        if (kw.isNull(params))
        {
            console.error(this.sClass, "::del() params is invalid.");
            return;
        }

        const type: kwMsgType = {
            api: this.api,
            data: null,
            params: params,
            srvcs: this.srvcs,
            tokens: this.tokens,
        };

        const msg: kwMsg = new kwMsgDelete(type);
        if (!msg.init())
        {
            console.error(this.sClass, "::del() error creating msg.");
            return;
        }

        return msg;
    }

    edit(data: object): kwMsg
    {
        //console.log(this.sClass, "::edit() called.");

        if (!this.init())
        {
            console.error(this.sClass, "::edit() error initializing.");
            return;
        }

        if (kw.isNull(data))
        {
            console.error(this.sClass, "::edit() data is invalid.");
            return;
        }


        const type: kwMsgType = {
            api: this.api,
            data: data,
            srvcs: this.srvcs,
            tokens: this.tokens,
        }

        const msg: kwMsg = new kwMsgEdit(type);
        if (!msg.init())
        {
            console.error(this.sClass, "::edit() error creating msg.");
            return;
        }

        return msg;
    }


    get(params: any): kwMsg
    {
        //console.log(this.sClass, "::get() called.");

        if (!this.init())
        {
            console.error(this.sClass, "::get() error initializing.");
            return;
        }

        if (!kw.isValid(params))
        {
            console.error(this.sClass, "::get() params is invalid.");
            return;
        }

        const type: kwMsgType = {
            api: this.api,
            data: null,
            params: params,
            srvcs: this.srvcs,
            tokens: this.tokens,
        }

        const msg: kwMsg = new kwMsgGet(type);
        if (!msg.init())
        {
            console.error(this.sClass, "::get() error creating msg.");
            return;
        }

        return msg;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwFctyMsg)
    }

}
