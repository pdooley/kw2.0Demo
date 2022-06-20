/**********************************************************************
}*
 * kwNg/ctrl/kwNgUiCtrlPagePubSub.ts
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
import { OnDestroy}            from '@angular/core';
import { OnInit}               from '@angular/core';

import { AppInjector}          from '@app/appInjector';

import { kw}                    from "@kw/kw";
import { kwBsStArr}             from "@kwBsStat/kwBsStArr";
import { kwLog}                 from "@kw/kwLog";
import { kwNgPubSub}            from "@kwNg/pubSub/kwNgPubSub";
import { kwNgUiAttrsStArr}      from "@kwNgUiState/attrs/kwNgUiAttrsSt";
import { kwNgUiDispStObj}       from "@kwNgUiState/disp/kwNgUiDispSt";
import { kwNgUiStView}          from "@kwNgUiStat/kwNgUiStView";
import { kwNgUiStInit}          from "@kwNgUiStat/kwNgUiStInit";
import { kwUiCtrlPagePubSub}    from '@kwUiCtrl/kwUiCtrlPagePubSub';


export abstract class kwNgUiCtrlPagePubSub  extends kwUiCtrlPagePubSub
                                            implements OnDestroy, OnInit
{


    protected constructor(
        srvcInit:   kwNgUiStInit,
        srvcView:   kwNgUiStView,
        srvcData:   kwBsStArr,
        sTag:       string   )
    {
        super(
            AppInjector.get(kwNgUiAttrsStArr),
            AppInjector.get(kwNgUiDispStObj),
            srvcInit,
            srvcView,
            srvcData,
            sTag,
            AppInjector.get(kwNgPubSub)     );

        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());
    }


//@formatter:on

    ngOnInit(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
        //console.log(log.called());

        //calling base class init();
        this.init();
    }

    ngOnDestroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnDestroy");
        //console.log(log.called());

       this.destroy();
    }



}
