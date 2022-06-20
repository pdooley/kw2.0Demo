/**********************************************************************
 *
 * kwNg/srvc/load/kwNgSrvcLoad.ts
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
import {HttpClient }               from "@angular/common/http";
import {Injectable}               from "@angular/core";
import {Observable }               from "rxjs/Observable";

import {kw }                       from "@kw/kw";
import {kwAct }                    from "@kwClass/act/kwAct";
import {kwActEnum }                from "@kwClass/act/kwActEnum";
import {kwLog }                    from "@kw/kwLog";
import {kwMsg }                    from "@kwClass/msg/kwMsg";
import {kwSrvcLoad }               from "@kwSrvc/load/kwSrvcLoad";
import {kwUrl }                    from "@kwClass/url/kwUrl";
//@formatter:on


@Injectable()
export class kwNgSrvcLoad extends kwSrvcLoad
{

    constructor(
        private srvc: HttpClient)
    {
        super();

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public load(msg: kwMsg): Observable<any>
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());

        if ( !kwMsg.is(msg))
        {
            console.error(log.invalid("msg"));
            return;
        }
        //console.info(log.isObj("msg"), msg);

        const helper = msg.getHelper();
        if ( kw.isNull(helper))
        {
            console.error(log.invalid("helper"));
            return;
        }
        //console.info(log.isObj("helper"), helper);

        const options = msg.getOptions();
        if ( kw.isNull(options))
        {
            console.error(log.invalid("options"));
            return;
        }
        //console.info(log.isObj("options"), options);

        const optionsHttp: Object = options.getOptions();
        if ( kw.isNull(optionsHttp))
        {
            console.error(log.invalid("optionsHttp"));
            return;
        }
        //console.info(log.isObj("optionsHttp"), optionsHttp);

        const url: kwUrl = options.getUrl();
        if (!kwUrl.is(url))
        {
            console.error(log.invalid("url"));
            return;
        }
        //console.info(log.isObj("url"), url);

        const sUrl: string = url.sUrl;
        if (!kw.isString(sUrl))
        {
            console.error(log.invalid("sUrl"));
            return;
        }
        //console.info(log.is("sUrl", sUrl));

        const act: kwAct = options.getAct();
        if (!kwAct.is(act))
        {
            console.error(log.invalid("act"));
            return;
        }
        //console.info(log.isObj("act"), act);

        const type: kwActEnum = act.getType();
        //console.info(log.isObj("type"), type);

        switch (type)
        {
            case kwActEnum.all:
            {
                return this.srvc.get(sUrl);
            }

            case kwActEnum.delete:
            {
                return this.srvc.delete(sUrl);
            }

            case kwActEnum.get:
            {
                return this.srvc.get(sUrl);
            }

            case kwActEnum.post:
            {
                const data = options.getData();
                if ( kw.isNull(data))
                {
                    console.error(log.invalid("data"));
                    return;
                }
                //console.info(log.isObj("data"), data);
                return this.srvc.post(sUrl, data);
            }

            case kwActEnum.update:
            {
                const data = options.getData();
                if ( kw.isNull(data))
                {
                    console.error(log.invalid("data"));
                    return;
                }
                //console.info(log.isObj("data"), data);
                return this.srvc.patch(sUrl, data);
            }

            default:
            {
                console.error(log.invalid("type"));
            }
        }
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwNgSrvcLoad)
    }

}
