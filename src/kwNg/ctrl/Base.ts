/**********************************************************************
 *
 * kwBsS        tate/class/kwNgCtrlMsg.ts
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
import {OnInit }           from '@angular/core';
import {OnDestroy }        from '@angular/core';

import {kwCtrlMsg }        from "@kwCtrl/kwCtrlMsg";
import {kwStMsg }          from "@kwStat/kwStMsg";
import {kwFctyMsg }      from "@kwFcty/msg/kwFctyMsg";

//@formatter:off


export class kwNgCtrlMsg extends kwCtrlMsg implements OnInit, OnDestroy
{

    protected constructor(
        src: kwFctyMsg,
        dst: kwStMsg       )
    {
        super(src, dst);

        //console.log(this.sClass, "::constructor() called");
    }

    ngOnInit()
    {
        //console.log(this.sClass, "::ngOnInit() called");

        if (!this.init())
        {
            console.error(this.sClass, "::ngOnInit() error initializing");
            return;
        }
    }

    ngOnDestroy()
    {
        //console.log(this.sClass, "::ngOnDestroy() called.");
        this.destroy();
    }

}
