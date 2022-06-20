/**********************************************************************
 *
 * kwBs/bootstrap/kwBootstrapCtrl.ts
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
import {Component}              from "@angular/core";

import {kwBs}                   from "@kwClass/Bs/kwBs";
import {kwBootstrapStBs}        from "./kwBootstrapSt";
import {kwBsInit}               from "../kwBsInit";
import {AppInjector} from "@app/appInjector";
import {kwTraceStTrace} from "@kwBs/trace/kwTraceSt";
//@formatter:on


@Component({selector: 'kw-bootstrap-bs-ctrl-bs', template: ``})
export class kwBootstrapCtrlBs
{
    private srvcBS;
    private srvcInit;


    constructor()
    {
        //console.log("kwBootstrapCtrlBs::constructor() called");
        this.srvcBS = AppInjector.get(kwBootstrapStBs);
        this.srvcInit = AppInjector.get(kwBsInit);
    }

    ngOnInit(): boolean
    {
        //console.log("kwBootstrapCtrlVal::ngOnInit() called");

        const BS: kwBs = this.srvcInit.getBS();
        if (!kwBs.is(BS))
        {
            console.error("kwBootstrapCtrlVal::ngOnInit() error retrieving BS.");
            return false;
        }
        //console.info("kwBootstrapCtrlVal::ngOnInit() BS is [", BS, "]");

        this.srvcBS.val = BS;

        return true;
    }

}
