/**********************************************************************
 *
 * kwBsState/http/kwHttpMsg.ts
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
import {HttpClient}               from "@angular/common/http";
import {Injectable}               from "@angular/core";
import {Observable}               from "rxjs/Observable";

import {kw}                       from "@kw/kw";
import {kwAct}                    from "@kwClass/act/kwAct";
import {kwActEnum}                from "@kwClass/act/kwActEnum";
import {kwOptionsTypeHttp}        from "@kwClass/options/kwOptionsTypeHttp";
import {kwUrl}                    from "@kwClass/url/kwUrl";
//@formatter:on


@Injectable()
export class kwHttpMsg
{

    constructor(private http: HttpClient)
    {
        //console.log("kwHttpMsg::constructor() called");
    }

    public multiple(msg): Observable<any>
    {
        //console.log("kwHttpMsg::multiple() called.");

        if ( kw.isNull(msg))
        {
            console.error("kwHttpMsg::multiple() msg is invalid");
            return;
        }
        //console.info("kwHttpMsg::multiple() msg is ", msg);

        const helper = msg.getHelper();
        if ( kw.isNull(helper))
        {
            console.error("kwHttpMsg:multiple() helper is invalid");
            return;
        }

        const options = msg.getOptions();
        if ( kw.isNull(options))
        {
            console.error("kwHttpMsg:multiple() options is invalid");
            return;
        }

        const optionsHttp: kwOptionsTypeHttp = options.getOptions();
        if ( kw.isNull(optionsHttp))
        {
            console.error("kwHttpMsg:multiple() optionsHttp is invalid");
            return;
        }
        //console.info("kwHttpMsg::multiple() optionsHttp is ", optionsHttp);

        const sOptions = JSON.stringify(optionsHttp);
        //console.info("kwHttpMsg::multiple() sOptions is ", sOptions);

        const url: kwUrl = options.getUrl();
        if (!kwUrl.is(url))
        {
            console.error("kwHttpMsg:multiple() url is invalid");
            return;
        }
        //console.info("kwHttpMsg::multiple() url is ", url);

        const sUrl: string = url.sUrl;
        if (!kw.isString(sUrl))
        {
            console.error("kwHttpMsg:multiple() sUrl is invalid");
            return;
        }
        //console.info("kwHttpMsg::multiple() sUrl is ", sUrl);

        const act: kwAct = options.getAct();
        if (!kwAct.is(act))
        {
            console.error("kwHttpMsg:multiple() act is invalid");
            return;
        }
        //console.info("kwHttpMsg::multiple() act is ", act);

        if (!act.isGet())
        {
            console.error("kwHttpMsg:multiple() act is invalid");
            return;
        }

        return this.http.get(sUrl);
    }

    public single(msg): Observable<any>
    {
        //console.log("kwHttpMsg::single() called.");

        if ( kw.isNull(msg))
        {
            console.error("kwHttpMsg::single() msg is invalid");
            return;
        }
        //console.info("kwHttpMsg::single() msg is ", msg);

        const helper = msg.getHelper();
        if ( kw.isNull(helper))
        {
            console.error("kwHttpMsg:single() helper is invalid");
            return;
        }

        const options = msg.getOptions();
        if ( kw.isNull(options))
        {
            console.error("kwHttpMsg:single() options is invalid");
            return;
        }
        //console.info("kwHttpMsg::single() options is ", options);

        const optionsHttp: Object = options.getOptions();
        if ( kw.isNull(optionsHttp))
        {
            console.error("kwHttpMsg:single() optionsHttp is invalid");
            return;
        }
        //console.info("kwHttpMsg::single() optionsHttp is ", optionsHttp);

        const url: kwUrl = options.getUrl();
        if (!kwUrl.is(url))
        {
            console.error("kwHttpMsg:single() url is invalid");
            return;
        }
        //console.info("kwHttpMsg::single() url is ", url);

        const sUrl: string = url.sUrl;
        if (!kw.isString(sUrl))
        {
            console.error("kwHttpMsg:single() sUrl is invalid");
            return;
        }
        //console.info("kwHttpMsg::single() sUrl is ", sUrl);

        const act: kwAct = options.getAct();
        if (!kwAct.is(act))
        {
            console.error("kwHttpMsg:single() act is invalid");
            return;
        }
        //console.info("kwHttpMsg::single() act is ", act);

        const type: kwActEnum = act.getType();

        switch (type)
        {
            case kwActEnum.get:
            {
                return this.http.get(sUrl);
            }

            case kwActEnum.update:
            {
                const data = options.getData();
                if ( kw.isNull(data))
                {
                    console.error("kwHttpMsg:single() data is invalid");
                    return;
                }
                return this.http.patch(sUrl, data);
            }

            case kwActEnum.delete:
            {
                return this.http.delete(sUrl);
            }

            case kwActEnum.post:
            {
                const data = options.getData();
                if ( kw.isNull(data))
                {
                    console.error("kwHttpMsg:single() data is invalid");
                    return;
                }
                return this.http.post(sUrl, data);
            }

            default:
            {
                console.error("kwHttpMsg::single() type is invalid");
            }
        }
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwHttpMsg)
    }

}
