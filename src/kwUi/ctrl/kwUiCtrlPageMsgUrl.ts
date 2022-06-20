/**********************************************************************
 *
 * kwUi/ctrl/kwUiCtrlPageMsgUrl.ts
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
import { ActivatedRoute }           from '@angular/router';

import { kwLog }                    from "@kw/kwLog";
import { kwStArr }                  from "@kwStat/kwStArr";
import { kwUiStInit}                  from "@kwUiStat/kwUiStInit";
import { kwStMsg }                  from "@kwStat/kwStMsg";
import {kwStObj}                    from "@kwStat/kwStObj";
import { kwUiStView }                 from "@kwUiStat/kwUiStView";
import { kwFctyMsg }                from "@kwFcty/msg/kwFctyMsg";
import {kwUiCtrlPageMsg}            from "@kwUiCtrl/kwUiCtrlPageMsg";



export abstract class kwUiCtrlPageMsgUrl extends kwUiCtrlPageMsg
{

    constructor(
        srvcAttrs:  kwStArr,
        srvcDisp:   kwStObj,
        srvcInit:   kwUiStInit,
        srvcView:   kwUiStView,
        srvcData:   kwStArr,
        srvcFcty:   kwFctyMsg,
        srvcMsg:    kwStMsg )
    {
        super(
            srvcAttrs,
            srvcDisp,
            srvcInit,
            srvcView,
            srvcData,
            srvcFcty,
            srvcMsg     );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

    }

//@formatter:on


    protected unSubscribeFltr(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubscribeFltr");
        //console.log(log.called());
    }


}
