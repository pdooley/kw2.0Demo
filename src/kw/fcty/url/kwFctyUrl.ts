/**********************************************************************
 *
 * kw/fcty/url/kwFctyUrl.ts
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
import {kw }                    from "@kw/kw";
import {kwAjax}                 from "@kwClass/ajax/kwAjax";
import {kweUrl }                from "@kwClass/url/kweUrl";
import {kwLog}                  from "@kw/kwLog";
import {kwSrvcs}                from "@kwClass/srvcs/kwSrvcs";
import {kwtUrl}                 from "@kwClass/url/kwtUrl";
import {kwUrl }                 from "@kwClass/url/kwUrl";
import {kwUrlFb }               from "@kwClass/url/kwUrlFb";
import {kwUrlHttp }             from "@kwClass/url/kwUrlHttp";
import {kwUrlHttps }            from "@kwClass/url/kwUrlHttps";
import {kwUrlJson }             from "@kwClass/url/kwUrlJson";
import {kwUrlSrvc}              from "@kwClass/url/kwUrlSrvc";
import {kwSrvc} from "@kwClass/srvc/kwSrvc";


const sCLASS: string = "kwFctyUrl";


export class kwFctyUrl {

    static create(info: kwtUrl): kwUrl {
        const log: kwLog = new kwLog(sCLASS, "constructor");
        //console.log(log.called());

        if (kw.isNull(info)) {
            console.error(log.invalid("info"));
            return;
        }
        //console.info(log.is("info", info));

        const nType: kweUrl = this.retrieveType(info);
        if (!kwUrlSrvc.in(nType)) {
            console.error(log.errLoad("nType"));
            return;
        }


        let url: kwUrl;

        switch (nType) {
            case kweUrl.firebase: {
                url = new kwUrlFb(info);
                break;
            }

            case kweUrl.http: {
                url = new kwUrlHttp(info);
                break;
            }

            case kweUrl.https: {
                url = new kwUrlHttps(info);
                break;
            }

            case kweUrl.json: {
                url = new kwUrlJson(info);
                break;
            }

            default: {
                console.error(log.invalid("nType"));
                return;
            }
        }

        if (!kwUrl.is(url)) {
            console.error(log.errCreate("url"));
            return;
        }
        //console.info(log.isObj("url"), url);

        if (!url.init()) {
            console.error(log.errInit("url"));
            return;
        }
        //console.info(log.isObj("url"), url);

        return url;
    }

    static retrieveType(info: kwtUrl): kweUrl {
        const log: kwLog = new kwLog(sCLASS, "retrieveType");
        //console.log(log.called());

        if (kw.isNull(info)) {
            console.error(log.invalid("info"));
            return;
        }
        //console.info(log.isObj("info"), info);

        const srvcs: kwSrvcs = info.srvcs;
        if (kw.isNull(srvcs)) {
            console.error(log.invalid("srvcs"));
            return;
        }
        //console.info(log.isObj("srvcs"), srvcs);

        const ajax: kwAjax = info.ajax;
        if (kw.isNull(ajax)) {
            console.error(log.invalid("ajax"));
            return;
        }
        //console.info(log.isObj("ajax"), ajax);

        const sSrvc = ajax.sSrvc;
        if (!kw.isString(sSrvc)) {
            console.error(log.invalid("sSrvc"));
            return;
        }
        //console.info(log.is("sSrvc", sSrvc));

        const srvc: kwSrvc = srvcs.getByCode(sSrvc);
        if (kw.isNull(srvc)) {
            console.error(log.invalid("srvc"));
            return;
        }
        //console.info(log.isObj("srvc"), srvc);

        const sProt: string = srvc.sProtocol;
        if (!kw.isString(sProt)) {
            console.error(log.invalid("sProt"));
            return;
        }
        //console.info(log.is("sProt", sProt));


        const nType = kwUrlSrvc.toEnum(sProt);
        if (!kwUrlSrvc.in(nType)) {
            console.error(log.invalid("nType"));
            return;
        }
        //console.info(log.is("nType", nType));

        return nType;

    }

}
