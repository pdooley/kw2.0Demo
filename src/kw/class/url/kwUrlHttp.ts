/**********************************************************************
 *
 * kw/class/url/kwUrlHttp.ts
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
import {kwLog} from "@kw/kwLog";
import {kwParam }       from "@kwClass/param/kwParam";



const sTMPL: string = "http://{&0}:{&1}/{&2}";



export class kwUrlHttp extends kwUrl
{

    constructor(
        type: kwtUrl   )
    {
        super(
            kweUrl.http,
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

        sPath = sPath.replace('[' + 0 + ']', sParam);
        //console.info(log.is("sPath", sPath));


        //console.info(log.is("sPath", sPath));
        this.sPath = sPath;
        //console.info(log.is("sPath", sPath));

        return true;
    }


    protected createUrl(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        if (!kw.isString(this.sProtocol))
        {
            console.error(log.invalid("sProtocol"));
            return false;
        }

        if (this.sProtocol !== "http")
        {
            console.error(log.invalid("sProtocol"));
            return false;
        }
        //console.info(log.is("sProtocol", this.sProtocol));

        if (!kw.isString(this.sHost))
        {
            console.error(log.invalid("sHost"));
            return false;
        }
        //console.info(log.is("sHost", this.sHost));

        if (!kw.isNumber(this.nPort))
        {
            console.error(log.invalid("nPort"));
            return false;
        }
        //console.info(log.is("nPort", this.nPort));

        if (!kw.isString(this.sPath))
        {
            console.error(log.invalid("sPath"));
            return false;
        }
        //console.info(log.is("sPath", this.sPath));

        const sUrl = sTMPL
            .replace("{&0}", this.sHost)
            .replace("{&1}", this.nPort.toString())
            .replace("{&2}", this.sPath);

        //console.info(log.is("sUrl", this.sUrl));

        this._sUrl = sUrl;

        return true;
    }


}
