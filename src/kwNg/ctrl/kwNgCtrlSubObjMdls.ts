/**********************************************************************
 *
 * kwNg/ctrl/kwNgCtrlSubValMdls.ts.ts
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

import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwBsStObj}          from "@kwBsStat/kwBsStObj";
import {kwCtrlSubObjMdls}   from "@kwCtrl/kwCtrlSubObjMdls";

//@formatter:on


export abstract class kwNgCtrlSubObjMdls    extends kwCtrlSubObjMdls
                                            implements OnInit, OnDestroy
{

    protected constructor(
        src: kwBsStArr,
        dst: kwBsStObj  )
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
