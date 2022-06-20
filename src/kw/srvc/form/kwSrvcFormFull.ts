/**********************************************************************
 *
 * kw/ctrl/kwCtrlFormFull.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import * as _               from "lodash";

import {kw }               from "@kw/kw"
import {kwSrvcForm }       from "./kwSrvcForm";
import {kwFctyMsg }        from "@kwFcty/msg/kwFctyMsg";
import {kwStMap }          from "@kwStat/kwStMap";
import {kwStMdl }          from "@kwStat/kwStMdl";
import {kwStMsg }          from "@kwStat/kwStMsg";

//@formatter:off

const sCURRS: string = "currencies";
const sLANGS: string = "languages";
const sTZS: string = "timezones";

export abstract class kwSrvcFormFull extends kwSrvcForm
{

    private currs: any;
    private langs: any;
    private tZs: any;

    protected constructor(
		srvcMdl: kwStMdl,
	    srvcMsg: kwStMsg,
	    srvcFcty: kwFctyMsg,
	    private srvcCurrs: kwStMap,
		private srvcLangs: kwStMap,
		private srvcTZs: kwStMap     )
	{
		super(
		    srvcMdl,
            srvcMsg,
            srvcFcty   );

		//console.log("kwSrvcFormFull::constructor() called.");
	}

    protected init(): boolean
    {
        //console.log("kwSrvcFormFull::init() called.");
        
        if (!super.init())
        {
            return false;
        }

        const currs = this.srvcCurrs.get();
        if (kw.isNull(currs))
        {
            console.error("kwSrvcFormFull::init() currs is invalid");
            return false;
        }
        //console.info("kwSrvcFormFull::init() currs is", currs);
        this.currs = currs;

        const langs = this.srvcLangs.get();
        if (kw.isNull(langs))
        {
            console.error("kwSrvcFormFull::load() langs is invalid");
            return false;
        }
        //console.info("kwSrvcFormFull::formLoad() langs is", langs);
        this.langs = langs;

        const tZs = this.srvcTZs.get();
        if (kw.isNull(tZs))
        {
            console.error("kwSrvcFormFull::load() tZs is invalid");
            return false;
        }
        //console.info("kwSrvcFormFull::load() tZs is", tZs);
        this.tZs = tZs;

        return true;
    }

	protected loadRec(obj: object): object
	{
		//console.log("kwSrvcFormFull::loadRec() called.");

		if (kw.isNull(obj))
		{
			console.error("kwSrvcFormFull::loadRec() obj is invalid");
			return;
		}

        if (kw.isNull(this.currs))
        {
            console.error("kwSrvcFormFull::load() currs is invalid");
            return;
        }
        //console.info("kwSrvcFormFull::formLoad() currs is", this.currs);

        if (kw.isNull(this.langs))
        {
            console.error("kwSrvcFormFull::load() langs is invalid");
            return;
        }
        //console.info("kwSrvcFormFull::formLoad() langs is", this.langs);

        if (kw.isNull(this.tZs))
        {
            console.error("kwSrvcFormFull::load() tZs is invalid");
            return;
        }
        //console.info("kwSrvcFormFull::formLoad() tZs is", this.tZs);

        const record = _.cloneDeep(obj);
		if (kw.isNull(record))
		{
			console.error("kwSrvcFormFull::load() record is invalid");
			return;
		}

		record[sCURRS] = this.currs;
		record[sLANGS] = this.langs;
		record[sTZS] = this.tZs;

		return record;
	}

}




