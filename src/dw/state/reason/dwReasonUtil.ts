//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";
import {dwReasonStApi,
        dwReasonStMdl,
        dwReasonStMsg}        from "./dwReasonSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwReasonFctyMsg extends kwBsFctyMsg
{
    constructor(api: dwReasonStApi){super(api)}
}


@Injectable({providedIn: 'root'})
export class dwReasonSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: dwReasonStMdl, msg: dwReasonStMsg, fcty: dwReasonFctyMsg)
    {super(mdl, msg, fcty); }
}
