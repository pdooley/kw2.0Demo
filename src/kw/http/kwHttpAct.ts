/**********************************************************************
 *
 * kw/state/kwHttpAct.ts
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
import {kw }                       from '../kw';
import {kwApi }                    from "@kwClass/api/kwApi";
import {kwMode }                   from "@kwClass/mode/kwMode";
import {kwMsg }                    from "@kwClass/msg/kwMsg";
import {kwMsgType }                from "@kwClass/msg/kwMsgType";
import {kwMsgAdd }                 from "@kwClass/msg/kwMsgAdd";
import {kwMsgDelete }              from "@kwClass/msg/kwMsgDelete";
import {kwMsgEdit }                from "@kwClass/msg/kwMsgEdit";
import {kwMsgGet }                 from "@kwClass/msg/kwMsgGet";
import {kwTokens }                 from "@kwClass/tokens/kwTokens";
import {kwSrvcs }                  from "@kwClass/srvcs/kwSrvcs";
//@formatter:off


export class kwHttpAct
{

    static add(
        srvcs: kwSrvcs,
        tokens: kwTokens,
        api: kwApi,
        data: object,
        params: object ): kwMsg
    {
        //console.log("kwHttpAct::add() called.");

        if (!kwSrvcs.is(srvcs))
        {
            console.error("kwHttpAct::add() srvcs is invalid.");
            return;
        }

        if (!kwTokens.is(tokens))
        {
            console.error("kwHttpAct::add() tokens is invalid.");
            return;
        }

        if (!kwApi.is(api))
        {
            console.error("kwHttpAct::add() api is invalid.");
            return;
        }

        if (kw.isNull(data))
        {
            console.error("kwHttpAct::add() data is invalid.");
            return;
        }

        if (kw.isNull(params))
        {
            console.error("kwHttpAct::add() params is invalid.");
            return;
        }

        const mode = api.getMode();
        if (!kwMode.is(mode))
        {
            console.error("kwHttpAct::add() mode is invalid.");
            return;
        }

        const type: kwMsgType = {
            api: api,
            data: data,
            params: params,
            srvcs: srvcs,
            tokens: tokens,
        }

        const msg: kwMsg = new kwMsgAdd(type);
        if (!msg.init())
        {
            console.error("kwAccAct::add() error creating msg.");
            return;
        }

        return msg;
    }

    static del(
        srvcs: kwSrvcs,
        tokens: kwTokens,
        api: kwApi,
        params: object  ): kwMsg
    {
        //console.log("kwHttpAct::del() called.");

        if (!kwSrvcs.is(srvcs))
        {
            console.error("kwHttpAct::del() srvcs is invalid.");
            return;
        }

        if (!kwTokens.is(tokens))
        {
            console.error("kwHttpAct::del() tokens is invalid.");
            return;
        }


        if (!kwApi.is(api))
        {
            console.error("kwHttpAct::del() api is invalid.");
            return;
        }

        if (kw.isNull(params))
        {
            console.error("kwHttpAct::del() params is invalid.");
            return;
        }

        const type: kwMsgType = {
            api: api,
            data: null,
            params: params,
            srvcs: srvcs,
            tokens: tokens,
        }

        const msg: kwMsg = new kwMsgDelete(type);
        if (!msg.init())
        {
            console.error("kwAccAct::del() error creating msg.");
            return;
        }

        return msg;
    }

    static edit(
        srvcs: kwSrvcs,
        tokens: kwTokens,
        api: kwApi,
        data: object,
        params: object  ): kwMsg
    {
        //console.log("kwHttpAct::edit() called.");

        if (!kwSrvcs.is(srvcs))
        {
            console.error("kwHttpAct::edit() srvcs is invalid.");
            return;
        }

        if (!kwTokens.is(tokens))
        {
            console.error("kwHttpAct::edit() tokens is invalid.");
            return;
        }

        if (!kwApi.is(api))
        {
            console.error("kwHttpAct::edit() api is invalid.");
            return;
        }

        if (kw.isNull(data))
        {
            console.error("kwHttpAct::edit() params is invalid.");
            return;
        }

        if (kw.isNull(params))
        {
            console.error("kwHttpAct::edit() params is invalid.");
            return;
        }

        const type: kwMsgType = {
            api: api,
            data: null,
            params: params,
            srvcs: srvcs,
            tokens: tokens,
        }

        const msg: kwMsg = new kwMsgEdit(type);
        if (!msg.init())
        {
            console.error("kwAccAct::edit() error creating msg.");
            return;
        }

        return msg;
    }

    static get(
        srvcs: kwSrvcs,
        tokens: kwTokens,
        api: kwApi,
        params: object  ): kwMsg
    {
        //console.log("kwHttpAct::get() called.");

        if (!kwSrvcs.is(srvcs))
        {
            console.error("kwHttpAct::get() srvcs is invalid.");
            return;
        }

        if (!kwTokens.is(tokens))
        {
            console.error("kwHttpAct::get() tokens is invalid.");
            return;
        }

        if (!kw.isArray(params))
        {
            console.error("kwHttpAct::get() params is invalid.");
            return;
        }

        if (kw.isNull(params))
        {
            console.error("kwHttpAct::get() params is invalid.");
            return;
        }

        if (!kwApi.is(api))
        {
            console.error("kwHttpAct::get() api is invalid.");
            return;
        }

        const type: kwMsgType = {
            api: api,
            data: null,
            params: params,
            srvcs: srvcs,
            tokens: tokens,
        };

        const msg: kwMsg = new kwMsgGet(type);
        if (!msg.init())
        {
            console.error("kwHttpAct::get() error creating msg.");
            return;
        }

        return msg;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwHttpAct)
    }

}
