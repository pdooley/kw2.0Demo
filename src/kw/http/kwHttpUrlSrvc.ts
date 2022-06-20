/**********************************************************************
 *
 * kw/http/kwHttpUrlSrvc.ts
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
import {kw }               from "@kw/kw"
import {kwtBs }            from "@kwClass/Bs/kwtBs";
import {kwUrlInType }      from "@kwClass/urlIn/kwUrlInType";
//@formatter:on


const sTEMPL = "{&1}://{&2}:{&3}/{&4}";

export class kwHttpUrlSrvc
{

    static toString(url: kwUrlInType): string
    {
        //console.log("kwHttpUrlSrvc::toString() called.");

        if (!url )
        {
            console.error("kwHttpUrlSrvc::toString() url is invalid.");
            return;
        }
        //console.info("kwHttpUrlSrvc::toString() url is [", url, "]");

        const sUrl = sTEMPL
            .replace("{&1}", url.sMode)
            .replace("{&2}", url.sHost)
            .replace("{&3}", url.nPort.toString())
            .replace("{&4}", url.sApi);

        //console.info("kwHttpUrlSrvc::toString() sUrl is [" + sUrl + "]");

        return sUrl;
    }

    static toUrl(data: kwtBs, sAPI: string, sMode: string): kwUrlInType
    {
        //console.log("kwUrlStateData::toUrl() called.");

        if (kw.isNull(data))
        {
            console.error("kwUrlStateData::toUrl() data is invalid.");
            return;
        }
        //console.info( "kwUrlStateData::toUrl() data is [", data, "]");

        if (!kw.isString(sAPI))
        {
            console.error("kwUrlStateData::toUrl() sAPI is invalid.");
            return;
        }
        //console.info( "kwUrlStateData::toUrl() sAPI is [", sAPI, "]");

        if (!kw.isString(sMode))
        {
            console.error("kwUrlStateData::toUrl() sMode is invalid.");
            return;
        }
        //console.info( "kwUrlStateData::toUrl() sMode is [", sMode, "]");

        let nPort: number;
        //const nPort: number = data.nPort;
        if (!kw.isNumber(nPort))
        {
            console.error("kwUrlStateData::toUrl() nPort is invalid.");
            return;
        }
        //console.info( "kwUrlStateData::toUrl() nPort is [", nPort, "]");

        let sHost: string;
        //const sHost: string = data.sHost;
        if (!kw.isString(sHost))
        {
            console.error("kwUrlStateData::toUrl() sHost is invalid.");
            return;
        }
        //console.info( "kwUrlStateData::toUrl() sHost is [", sHost, "]");

        const type: kwUrlInType = {
            sApi: sAPI,
            sHost: sHost,
            sMode: sMode,
            nPort: nPort,
        }
        //console.info( "kwUrlStateData::toUrl() url is [", url, "]");

        return type;
    }

}
/*
this.http.get(sURL).map(res => res.json())
    .subscribe(config => {
        resolve(this.store(config));
*/
