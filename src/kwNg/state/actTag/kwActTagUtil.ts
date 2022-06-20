//@formatter:on
import {Injectable}             from "@angular/core";

import {kwActTagStApi,
        kwActTagStMdl,
        kwActTagStMsg}          from "./kwActTagSt";
import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwActTagFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwActTagStApi){super(api)}
}


@Injectable({providedIn: 'root'})
export class kwActTagSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: kwActTagStMdl, msg: kwActTagStMsg, fcty: kwActTagFctyMsg)
    {super(mdl, msg, fcty); }
}
