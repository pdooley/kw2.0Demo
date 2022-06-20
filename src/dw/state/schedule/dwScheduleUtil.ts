//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";
import {dwScheduleStApi,
        dwScheduleStMdl,
        dwScheduleStMsg}        from "./dwScheduleSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwScheduleFctyMsg extends kwBsFctyMsg
{
    constructor(api: dwScheduleStApi){super(api)}
}


@Injectable({providedIn: 'root'})
export class dwScheduleSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: dwScheduleStMdl, msg: dwScheduleStMsg, fcty: dwScheduleFctyMsg)
    {super(mdl, msg, fcty); }
}
