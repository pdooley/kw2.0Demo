/**********************************************************************
 *
 * /kw/main/kwBaseKey.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import {kw }                       from "@kw/kw"

import {kwStVal }              from "@kwStat/kwStVal";
import {kwIntfKey }                from "./kwIntfKey";
//@formatter:off


export class kwBaseKey implements kwIntfKey
{

    constructor(    private sKey: string,
                    private srvcVal: kwStVal)
    {
        //console.log("kwBaseKey::constructor() called.");
    }

    protected get(): any
    {
        //console.log("kwBaseKey::change() called.");

        if (!kw.isString(this.sKey))
        {
            console.error("kwKeySrvc::get() sKey is invalid.");
            return
        }
        //console.info("kwBaseKey::change() sKey is [", this.sKey, "]");

        if ( kw.isNull(this.srvcVal))
        {
            console.error("kwBaseKey::get() srvcList is invalid.");
            return
        }

        const val: any = window[ this.sKey ];
        if (!val )
        {
            console.error("kwBaseKey::get() ", this.sKey, " is not present");
            return;
        }
        //console.info( "kwBaseKey::get() ", sKey, " is [", val, "]." );

        this.srvcVal.val = val;

        return val;
    }
}
