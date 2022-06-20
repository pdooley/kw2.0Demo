/**********************************************************************
 *
 * kw/class/ajax/kwAjaxDebug.ts
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


export class kwAjaxDebug extends kwAjax
{
    constructor(private data: kwAjaxType)
    {
        super(kwAjaxEnum.debug, data);
        //console.log("kwAjaxDebug::constructor() is called.");
    }
}

