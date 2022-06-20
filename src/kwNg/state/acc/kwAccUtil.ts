//@formatter:on
import {Injectable}             from "@angular/core";

import {kwAccStApi,
        kwAccStMdl,
        kwAccStMsg}             from "./kwAccSt";
import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwAccFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwAccStApi){super(api)}
}


@Injectable({providedIn: 'root'})
export class kwAccSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: kwAccStMdl, msg: kwAccStMsg, fcty: kwAccFctyMsg)
    {super(mdl, msg, fcty); }
}
