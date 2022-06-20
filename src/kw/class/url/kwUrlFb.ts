/**********************************************************************
 *
 * kw/class/url/kwUrl.ts
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
import {kwLog}          from "@kw/kwLog";
import {kwtUrl }        from "./kwtUrl";
import {kwUrl }         from "./kwUrl";


const sTMPL: string = "{&0}";


export class kwUrlFb extends kwUrl
{

    constructor(
        type: kwtUrl   )
    {
        super(
            kweUrl.firebase,
            type    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


//@formatter:on


    createPath(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createPath");
        //console.log(log.called());


        if (!kw.isString(this.sTempl))
        {
            console.error(log.invalid("sTempl"));
            return false;
        }
        //console.info(log.isObj("sTempl"), this.sTempl);


        if (!kw.isValid(this.params))
        {
            //console.info(log.empty("params"));

            this.sPath = this.sTempl.replace('/[0]','');;
            //console.info(log.is("sPath", this.sPath));

            return true;
        }


        if (!kw.isArray(this.params))
        {
            console.error(log.invalid("params"));
            return false
        }
        //console.info(log.isObj("params"), this.params);


        let sPath: string = this.sTempl;

        const nLength = this.params.length;
        //console.info(log.is("nLength", nLength));


        if (nLength > 1)
        {
            this.sPath = sPath.replace('/[0]','');
            //console.info(log.is("sPath", this.sPath));
            return true;
        }

        const param: object = this.params[ 0 ];
        //console.info(log.isObj("param"), param);

        if (kw.isNull(param))
        {
            //console.info(log.invalid("param"));
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

        sPath = sPath.replace('[' + 0 + ']', sParam);
        //console.info(log.is("sPath", sPath));


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

        if (this.sProtocol !== "firebase")
        {
            console.error(log.invalid("sProtocol"));
            return false;
        }
        //console.info(log.is("sProtocol", this.sProtocol));

        if (!kw.isString(this.sPath))
        {
            console.error(log.invalid("sPath"));
            return false;
        }
        //console.info(log.is("sPath", this.sPath));

        const sUrl = sTMPL
            .replace("{&0}", this.sPath);

        //console.info(log.is("sUrl", sUrl));

        this._sUrl = sUrl;

        return true;
    }


}
