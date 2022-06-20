/**********************************************************************
 *
 * kw/ctrl/kwCtrlPropSubMdl.ts
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

import {kw}                 from "@kw/kw";
import {kwCtrlPropSub}      from "@kwCtrl/kwCtrlPropSub";
import {kwFctyMdl}          from "@kwFcty/mdl/kwFctyMdl";
import {kwLog}              from "@kw/kwLog";
import {kwMap}              from "@kwClass/kwMap";
import {kwMdl}              from "@kwClass/mdl/kwMdl";
import {kwStMap}            from "@kwStat/kwStMap";
import {kwStMdl}            from "@kwStat/kwStMdl";
import {kwStObj}            from "@kwStat/kwStObj";

//@formatter:off


export abstract class kwCtrlPropSubMdl extends kwCtrlPropSub
{

    private currMap: kwMap;
    private langMap: kwMap;
    private tZMap: kwMap;

    protected constructor(
        src: kwStObj,
        dst: kwStMdl,
        sProp: string,
        private srvcCurrs: kwStMap,
        private srvcLangs: kwStMap,
        private srvcTzs: kwStMap        )
    {
        super(src, dst, sProp);
        //console.log("kwCtrlMdlFull::constructor() called");
    }

    protected init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (!super.init())
        {
            console.error(this.sClass, "::init() error");
            return false;
        }

        if (!kwStMap.is(this.srvcCurrs))
        {
            console.error(log.errInit("page"));
            return false;
        }
        //console.info("kwCtrlMdlFull::init() srvcCurrs is ", this.srvcCurrs);

        if (!kwStMap.is(this.srvcLangs))
        {
            console.error(log.errInit("page"));
            return false;
        }
        //console.info("kwCtrlMdlFull::init() srvcLangs is ", this.srvcLangs);

        if (!kwStMap.is(this.srvcTzs))
        {
            console.error(log.errInit("page"));
            return false;
        }
        //console.info("kwCtrlMdlFull::init() srvcTzs is ", this.srvcTzs);

        return true;
   }


    protected createObj(val: any): any
    {
        const log: kwLog = new kwLog(this.sClass, "createObj");
        //console.log(log.called());

        if (kw.isNull(val))
        {
            console.error("kwCtrlMdlFull::createObj() mdl for [", this.sProp, "] is not provided.");
            return null;
        }
        //console.info("kwCtrlMdlFull::createObj() val is ", val);

        if (!this.loadCurrMap())
        {
            console.error("kwCtrlMdlFull::createObj() error loading currMap");
            return null;
        }

        if (!this.loadLangMap())
        {
            console.error("kwCtrlMdlFull::createObj() error loading langMap");
            return null;
        }


        if (!this.loadTzMap())
        {
            console.error("kwCtrlMdlFull::createObj() error creating tZMap");
            return null;
        }

        const mdl: kwMdl = kwFctyMdl.create(val, this.currMap, this.langMap, this.tZMap);
        if (!kwMdl.is(mdl))
        {
            console.error("kwCtrlMdlFull::createObj() error creating mdl.");
            return null;
        }
        //console.info("kwCtrlMdlFull::createObj() mdl is ", mdl);

        return mdl;
    }

    private loadCurrMap(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        if (kwMap.is(this.currMap))
        {
            return true;
        }

        const currMap = this.srvcCurrs.get();
        if (!kwMap.is(currMap))
        {
            console.error("kwCtrlMdlFull::loadCurrMap() error retrieving currMap");
            return false;
        }
        //console.info("kwCtrlMdlFull::loadCurrMap() currMap is ", currMap);
        this.currMap = currMap;

        return true;
    }

    private loadLangMap(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        if (kwMap.is(this.langMap))
        {
            return true;
        }

        const langMap = this.srvcLangs.get();
        if (!kwMap.is(langMap))
        {
            console.error("kwCtrlMdlFull::loadLangMap() error retrieving langMap");
            return false;
        }
        //console.info("kwCtrlMdlFull::loadLangMap() langMap is ", langMap);
        this.langMap = langMap;

        return true;
    }

    private loadTzMap(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        if (kwMap.is(this.tZMap))
        {
            return true;
        }

        const tZMap = this.srvcTzs.get();
        if (!kwMap.is(tZMap))
        {
            console.error("kwCtrlMdlFull::loadTzMap() error retrieving tZMap");
            return false;
        }
        //console.info("kwCtrlMdlFull::loadTzMap() tZMap is ", tZMap);
        this.tZMap = tZMap;

        return true;
    }

}
