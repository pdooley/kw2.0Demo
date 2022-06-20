/**********************************************************************
 *
 * kw/ctrl/kwCtrlSubMdl
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
import {kw }               from "@kw/kw";
import {kwCtrlSub }        from "./kwCtrlSub";
import {kwFctyMdl}          from "@kwFcty/mdl/kwFctyMdl";
import {kwLog }            from "@kw/kwLog";
import {kwMap}              from "@kwClass/kwMap";
import {kwMdl}              from "@kwClass/mdl/kwMdl";
import {kwMdls }           from "@kwClass/mdls/kwMdls";
import {kwStMdl }          from "@kwStat/kwStMdl";
import {kwStMap}            from "@kwStat/kwStMap";
import {kwStObj }          from "@kwStat/kwStObj";



export abstract class kwCtrlSubMdl extends kwCtrlSub
{

    private currMap: kwMap;
    private langMap: kwMap;
    private tZMap: kwMap;

    protected constructor(
        src: kwStObj,
        dst: kwStMdl,
        private sProp: string,
        private currs: kwStMap,
        private langs: kwStMap,
        private tzs: kwStMap        )
    {
        super(src, dst);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (!super.init())
        {
            return false;
        }

        if (!kwStMap.is(this.currs))
        {
            console.error(log.invalid("currs"));
            return false;
        }
        //console.info(log.isObj("currs"), this.currs);

        if (!kwStMap.is(this.langs))
        {
            console.error(log.invalid("langs"));
            return false;
        }
        //console.info(log.isObj("langs"), this.langs);

        if (!kwStMap.is(this.tzs))
        {
            console.error(log.invalid("tzs"));
            return false;
        }
        //console.info(log.isObj("tzs"), this.tzs);

        return true;
    }

    protected preLoad(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "preLoad");
        //console.log(log.called());


        if (!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return false;
        }
        //console.info(log.isObj("data"), data);


        if (!this.loadCurrMap())
        {
            console.error(log.errLoad("currMap"));
            return null;
        }


        if (!this.loadLangMap())
        {
            console.error(log.errLoad("langMap"));
            return null;
        }


        if (!this.loadTzMap())
        {
            console.error(log.errLoad("tzMap"));
            return null;
        }

        const info: kwMdls = <kwMdls>data;
        if (!kwMdls.is(info))
        {
            //console.info(log.empty("info"));
        }
        //console.info(log.isObj("info"), info);


        if (!kw.isString(this.sProp))
        {
            console.error(log.invalid("sProp"));
            return false;
        }
        //console.info(log.isObj("sProp"), this.sProp);


        const val = info.getItem(this.sProp);
        if (!kw.isValid(val))
        {
            //console.info(log.invalid("val"));
            return false;
        }
        //console.info(log.isObj("val"), val);


        const mdl: kwMdl = kwFctyMdl.create(val, this.currMap, this.langMap, this.tZMap);
        if (!kwMdl.is(mdl))
        {
            console.error(log.errCreate("mdl"));
            return null;
        }
        //console.info(log.isObj("mdl"), mdl);


        return this.load(mdl);
    }


    private loadCurrMap(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadCurrMap");
        //console.log(log.called());

        if (kwMap.is(this.currMap))
        {
            return true;
        }

        const currMap = this.currs.get();
        if (!kwMap.is(currMap))
        {
            console.error(log.errLoad("currMap"));
            return false;
        }
        //console.info(log.isObj("currMap"), currMap);
        this.currMap = currMap;

        return true;
    }


    private loadLangMap(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadLangMap");
        //console.log(log.called());

        if (kwMap.is(this.langMap))
        {
            return true;
        }

        const langMap = this.langs.get();
        if (!kwMap.is(langMap))
        {
            console.error(log.errLoad("langMap"));
            return false;
        }
        //console.info(log.isObj("langMap"), langMap);
        this.langMap = langMap;

        return true;
    }


    private loadTzMap(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadTzMap");
        //console.log(log.called());

        if (kwMap.is(this.tZMap))
        {
            return true;
        }

        const tZMap = this.tzs.get();
        if (!kwMap.is(tZMap))
        {
            console.error(log.errLoad("tZMap"));
            return false;
        }
        //console.info(log.isObj("tZMap"), tZMap);
        this.tZMap = tZMap;

        return true;
    }

}
