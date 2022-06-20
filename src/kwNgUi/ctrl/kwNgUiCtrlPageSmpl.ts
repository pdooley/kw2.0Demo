/**********************************************************************
 *
 * kwNg/ctrl/kwNgUiCtrlPageSmpl.ts
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
import { OnChanges}            from '@angular/core';
import { SimpleChanges}        from '@angular/core';
import { Router}               from '@angular/router';

import {AppInjector}            from "@app/appInjector";

import { kw}                   from "@kw/kw";
import { kwLog}                 from "@kw/kwLog";
import {kwNgUiAttrsStArr}       from "@kwNgUiState/attrs/kwNgUiAttrsSt";
import {kwNgUiDispStObj}        from "@kwNgUiState/disp/kwNgUiDispSt";
import {kwNgUiStInit}           from "@kwNgUiStat/kwNgUiStInit";
import {kwNgUiStView}           from "@kwNgUiStat/kwNgUiStView";
import {kwUiCtrlPageSmpl}       from '@kwUiCtrl/kwUiCtrlPageSmpl';


export abstract class kwNgUiCtrlPageSmpl    extends kwUiCtrlPageSmpl
                                            implements OnChanges
{

    router;

    constructor(
        srvcInit: kwNgUiStInit,
        srvcView: kwNgUiStView    )
    {
        super(
            AppInjector.get(kwNgUiAttrsStArr),
            AppInjector.get(kwNgUiDispStObj),
            srvcInit,
            srvcView   );

        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());
    }

//@formatter:on

    ngOnInit(): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());

        //calling base class init();
        this.init();
    }

    protected navigate(sLink: string): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());

        if (kw.isNull(this.router))
        {
            this.router = AppInjector.get(Router);
        }

        if (!kw.isString(sLink))
        {
            console.error(this.sClass, "::navigate() sLink is invalid");
            return;
        }
        this.router.navigate([sLink]);
    }

    protected publish($event: object): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());
    }

    ngOnChanges(changes: SimpleChanges)
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());

        if (kw.isNull(changes))
        {
            console.error(this.sClass, "::ngOnChanges() changes is invalid");
            return;
        }

    }

}
