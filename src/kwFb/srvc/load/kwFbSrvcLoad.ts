/**********************************************************************
 *
 * kwFb/srvc/store/kwFbSrvcStore.ts author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {AngularFirestore}           from '@angular/fire/firestore';
import {Injectable}                 from '@angular/core';
import {Observable}                 from "rxjs";
import 'rxjs/add/operator/map';
import { from }                     from 'rxjs';

import {WhereFilterOp}              from "firebase/firestore"

import {kw}                         from "@kw/kw";
import {kwAct}                      from "@kwClass/act/kwAct";
import {kwActEnum}                  from "@kwClass/act/kwActEnum";
import {kwErrStVal}                 from "@kwNgState/err/kwErrSt";
import {kwLog}                      from "@kw/kwLog";
import {kwMsg}                      from "@kwClass/msg/kwMsg";
import {kwParam}                    from "@kwClass/param/kwParam";
import {kwSrvcLoad}                 from "@kwSrvc/load/kwSrvcLoad";
import {kwTraceStTrace}             from "@kwBs/trace/kwTraceSt";
import {kwtFbSrvcLoad}              from "./kwtFbSrvcLoad";
import {kwUrl}                      from "@kwClass/url/kwUrl";


const sMSG_ADD: string              = "collection([0]).add()";
const sMSG_ALL: string              = "collection([0]).snapshotChanges()";
const sMSG_DEL: string              = "doc([0]).delete";
const sMSG_EDT: string              = "collection([0]).doc{[1].update()";
const sMSG_GET: string              = "collection([0]).valueChanges()";


@Injectable({providedIn: 'root'})
export class kwFbSrvcLoad extends kwSrvcLoad
{

    constructor(
        private srvc: AngularFirestore,
        private trace: kwTraceStTrace   )
    {
        super();

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    public load(msg: kwMsg): Observable<any>
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());

        if ( kw.isNull(msg))
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
        //console.info(log.isObj("sUrl"), sUrl);

        const params: object[] = url.params;
        //console.info(log.isObj("params"), params);

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
                this.traceAll(sUrl);

                if (kw.isValid(params) && params.length === 3)
                {
                    //console.info(log.isObj("params"), params);

                    const sParam: string = params[0].toString();
                    const sOpp: string = params[1].toString();
                    const val: any = params[2];

                    const sOp: WhereFilterOp = <WhereFilterOp>(sOpp);
                    if (!kw.isString(sOp))
                    {
                        console.error(log.errCreate("sOp"));
                        return;
                    }
                    //console.info(log.isObj("sOp"), sOp);

                    return this.srvc.collection(sUrl, ref => ref.where(sParam, sOp, val))
                        .snapshotChanges()
                        .map(actions => {
                            return actions.map(a => {
                                const data = a.payload.doc.data();
                                const id = a.payload.doc.id;
                                return { id, data };
                            })
                        })
                }

                return this.srvc.collection(sUrl)
                    .snapshotChanges()
                    .map(actions => {
                    return actions.map(a => {
                        const data = a.payload.doc.data();
                        const id = a.payload.doc.id;
                        return { id, data };
                    })
                })

                break;
            }

            case kwActEnum.delete:
            {
                this.traceDel(sUrl);

                return from(this.srvc.doc(sUrl).delete());
                break;
            }

            case kwActEnum.get:
            {
                this.traceGet(sUrl);

                if (kw.isValid(params) && params.length === 3)
                {
                    //console.info(log.isObj("params"), params);

                    const sParam: string = params[0].toString();
                    const sOpp: string = params[1].toString();
                    const sVal: string = params[2].toString();

                    const sOp: WhereFilterOp = <WhereFilterOp>(sOpp);
                    if (!kw.isString(sOp))
                    {
                        console.error(log.errCreate("sOp"));
                        return;
                    }
                    //console.info(log.isObj("sOp"), sOp);

                    return this.srvc.collection(sUrl, ref => ref.where(sParam, sOp, sVal))
                        .valueChanges();
                }

                return this.srvc.collection(sUrl).valueChanges();

                break;
            }

            case kwActEnum.post:
            {
                const wrap = options.getData();
                if ( kw.isNull(wrap))
                {
                    console.error(log.invalid("wrap"));
                    return;
                }
                //console.info(log.isObj("wrap"), wrap);


                const type: kwtFbSrvcLoad = <kwtFbSrvcLoad>wrap;


                const sId: string = type.id;
                if ( !kw.isString(sId))
                {
                    console.error(log.invalid("sId"));
                    return;
                }


                if (sId.length !== 0)
                {
                    console.error(log.invalid("sId"));
                    return;
                }
                //console.info(log.is("sId", sId));


                const data = type.data;
                if ( kw.isNull(data))
                {
                    console.error(log.invalid("data"));
                    return;
                }
                //console.info(log.isObj("data"), data);
                //console.info(log.is("sUrl", sUrl));


                this.traceAdd(sUrl, data);


                return from(this.srvc.collection(sUrl).add(data));

                break;
            }

            case kwActEnum.patch:
            {
                const wrap = options.getData();
                if ( kw.isNull(wrap))
                {
                    console.error(log.invalid("wrap"));
                    return;
                }

                const type: kwtFbSrvcLoad = <kwtFbSrvcLoad>wrap;


                const sId: string = type.id;
                if ( !kw.isString(sId))
                {
                    console.error(log.invalid("sId"));
                    return;
                }


                if (sId.length === 0)
                {
                    console.error(log.invalid("sId"));
                    return;
                }
                //console.info(log.is("sId", sId));


                const data = type.data;
                if ( kw.isNull(data))
                {
                    console.error(log.invalid("data"));
                    return;
                }
                //console.info(log.isObj("data"), data);


                this.traceEdt(sUrl, sId, data);


                return from(this.srvc.collection(sUrl).doc(sId).update(data));

                break;
            }

            default:
            {
                console.error("kwHttpMsg::single() type is invalid");
            }
        }
    }


    private traceAdd(sUrl: string, data: object)
    {
        const log: kwLog = new kwLog(this.sClass, "traceAdd");
        //console.log(log.called());

        if (!this.trace.bLoad)
        {
            return;
        }

        if ( !kw.isString(sUrl))
        {
            console.error(log.invalid("sUrl"));
            return;
        }


        if ( !kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return;
        }


        const sMsg: string = sMSG_ADD.replace("[0]", sUrl);

        if (true){console.info(log.isObj(sMsg), data)}
    }


    private traceAll(sUrl: string)
    {
        const log: kwLog = new kwLog(this.sClass, "traceAll");
        //console.log(log.called());

        if (!this.trace.bLoad)
        {
            return;
        }

        if ( !kw.isString(sUrl))
        {
            console.error(log.invalid("sUrl"));
            return;
        }


        const sMsg: string = sMSG_ALL.replace("[0]", sUrl);

        if (true){console.info(log.isObj(sMsg), {})}
    }


    private traceDel(sUrl: string)
    {
        const log: kwLog = new kwLog(this.sClass, "traceDel");
        //console.log(log.called());

        if (!this.trace.bLoad)
        {
            return;
        }

        if ( !kw.isString(sUrl))
        {
            console.error(log.invalid("sUrl"));
            return;
        }

        const sMsg: string = sMSG_DEL.replace("[0]", sUrl);


        if (true){console.info(log.isObj(sMsg), {})}
    }


    private traceEdt(sUrl: string, sId: string, data: object)
    {
        const log: kwLog = new kwLog(this.sClass, "traceEdt");
        //console.log(log.called());

        if (!this.trace.bLoad)
        {
            return;
        }

        if ( !kw.isString(sUrl))
        {
            console.error(log.invalid("sUrl"));
            return;
        }

        if ( !kw.isString(sId))
        {
            console.error(log.invalid("sId"));
            return;
        }

        if ( !kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return;
        }

        const sMsg: string =
            sMSG_EDT
            .replace("[0]", sUrl)
            .replace("[1]", sId);

        if (true){console.info(log.isObj(sMsg), data)}
    }


    private traceGet(sUrl: string)
    {
        const log: kwLog = new kwLog(this.sClass, "traceGet");
        //console.log(log.called());

        if (!this.trace.bLoad)
        {
            return;
        }

        if ( !kw.isString(sUrl))
        {
            console.error(log.invalid("sUrl"));
            return;
        }

        const sMsg: string = sMSG_GET.replace("[0]", sUrl);


        if (true){console.info(log.isObj(sMsg), {})}
    }

}
