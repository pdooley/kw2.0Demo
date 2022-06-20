/**********************************************************************
 *
 * kw/ctrl/kwCtrlFormSmpl.ts
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
import {kwStMdl }          from "@kwStat/kwStMdl";
import {kwStMsg }          from "@kwStat/kwStMsg";

//@formatter:off


export abstract class kwSrvcFormSmpl extends kwSrvcForm
{

    protected constructor(
		srvcMdl: kwStMdl,
	    srvcMsg: kwStMsg,
	    srvcFcty: kwFctyMsg  )
	{
		super(
		    srvcMdl,
            srvcMsg,
            srvcFcty    );

		//console.log("kwSrvcFormSmpl::constructor() called.");
	}

	protected loadRec(obj: object): object
	{
		//console.log("kwSrvcFormSmpl::loadRec() called.");

		if (kw.isNull(obj))
		{
			console.error("kwSrvcFormSmpl::loadRec() obj is invalid");
			return;
		}

        const record = _.cloneDeep(obj);
		if (kw.isNull(record))
		{
			console.error("kwSrvcFormSmpl::loadRec() record is invalid");
			return;
		}

		return record;
	}

}




