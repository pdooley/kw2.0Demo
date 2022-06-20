/**********************************************************************
 *
 * kw/class/ajax/kwAjaxLive.ts
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
import {kwAjax }                from "./kwAjax";
import {kwAjaxEnum }            from "./kwAjaxEnum";
import {kwAjaxType }            from "./kwAjaxType";
//@formatter:on


export class kwAjaxLive extends kwAjax
{
    constructor(private data: kwAjaxType)
    {
        super(kwAjaxEnum.live, data);
        //console.log("kwAjaxLive::constructor() called.");
    }

}

