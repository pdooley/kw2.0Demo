/**********************************************************************
 *
 * kwNg/ctrl/kwNgCtrlSubVal.ts
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
import {OnInit}             from '@angular/core';
import {OnDestroy}          from '@angular/core';

import {kwCtrlSubObj}       from "@kwCtrl/kwCtrlSubObj";
import {kwStArr}            from "@kwStat/kwStArr";
import {kwStObj}            from "@kwStat/kwStObj";

//@formatter:on


export abstract class kwNgCtrlSubObj    extends kwCtrlSubObj
                                        implements OnInit, OnDestroy
{

    protected constructor(
        src: kwStArr,
        dst: kwStObj  )
    {
        super(src, dst);
        //console.log(this.sClass, "::constructor() called");
    }

    ngOnInit()
    {
        //console.log(this.sClass, "::ngOnInit() called");

        if(!this.init())
        {
            console.error(this.sClass, "::ngOnInit() error.");
        }

    }

    ngOnDestroy()
    {
        //console.log(this.sClass, "::ngOnDestroy() called.");
        this.destroy();
    }
}
