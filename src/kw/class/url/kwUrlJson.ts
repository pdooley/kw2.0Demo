/**********************************************************************
 *
 * kw/class/url/kwUrlJson.ts
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
import {kw }            from "@kw/kw";
import {kweUrl }        from "@kwClass/url/kweUrl";
import {kwtUrl }        from "./kwtUrl";
import {kwUrl }         from "./kwUrl";
import {kwLog}          from "@kw/kwLog";
import {kwParam }       from "@kwClass/param/kwParam";


const sProp: string = "json";
const sTMPL: string = "{&0}/{&1}";


export class kwUrlJson extends kwUrl
{

    constructor(
        type: kwtUrl   )
    {
        super(
            kweUrl.json,
            type    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


//@formatter:on

    createPath(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createPath");
        //console.log(log.called());


        if (!kw.isArray(this.params))
        {
            console.error(log.invalid("params"));
            return false;
        }
        //console.info(log.isObj("params"), this.params);


        if (!kw.isString(this.sTempl))
        {
            console.error(log.invalid("params"));
            return false;
        }
        //console.info(log.isObj("params"), this.params);


        const nLength = this.params.length;
        //console.info(log.is("nLength", nLength));

        let sPath: string = this.sTempl;

        if (nLength === 0)
        {
            this.sPath = sPath.replace('/[0]','');
            //console.info(log.is("sPath", this.sPath));
            return true;
        }

        for (let i = 0; i < nLength; i++ )
        {
            const param: object = this.params[ i ];
            //console.info(log.isObj("param"), param);

            if (kw.isNull(param))
            {
                console.error(log.invalid("param"));
                return false;
            }
            //console.info(log.isObj("param"), param);

            const sParam = param.toString();
            if (!kw.isString(sParam))
            {
                console.error(log.invalid("params"));
                return false;
            }
            //console.info(log.is("sParam", sParam));

            sPath = sPath.replace('[' + i + ']', sParam);
            //console.info(log.is("sPath", sPath));
        }

        //console.info(log.is("sPath", sPath));
        this.sPath = sPath;
        //console.info(log.is("sPath", sPath));

        return true;
    }


    protected createUrl(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createUrl");
        //console.log(log.called());

        if (!kw.isString(this.sProtocol))
        {
            console.error(log.invalid("sProtocol"));
            return false;
        }

        if (this.sProtocol !== sProp)
        {
            console.error("kwUrl::createUrl() sProtocol is invalid");
            return false;
        }
        //console.info(log.is("sProtocol", this.sProtocol));

        if (!kw.isString(this.sHost))
        {
            console.error(log.invalid("sProtocol"));
            return false;
        }
        //console.info(log.is("sHost", this.sHost));

        if (!kw.isString(this.sPath))
        {
            console.error(log.invalid("sProtocol"));
            return false;
        }
        //console.info(log.is("sPath", this.sPath));

        const sUrl = sTMPL
            .replace("{&0}", this.sHost)
            .replace("{&1}", this.sPath);

        //console.info(log.is("sUrl", sUrl));

        this._sUrl = sUrl;

        return true;
    }


}
