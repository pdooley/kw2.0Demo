//@formatter:on
import {Injectable}             from "@angular/core";

import {kwAccCreateStApi,
        kwAccCreateStMdl,
        kwAccCreateStMsg}       from "./kwAccCreateSt";
import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwAccCreateFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwAccCreateStApi){super(api)}
}


@Injectable({providedIn: 'root'})
export class kwAccCreateSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: kwAccCreateStMdl, msg: kwAccCreateStMsg, fcty: kwAccCreateFctyMsg)
    {super(mdl, msg, fcty); }
}
