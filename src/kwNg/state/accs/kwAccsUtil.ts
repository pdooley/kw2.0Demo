//@formatter:on
import {Injectable}             from "@angular/core";

import {kwAccsStApi,
        kwAccsStMsg}            from "./kwAccsSt";
import {kwAccStMdl}              from "../acc/kwAccSt";
import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwAccsFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwAccsStApi){super(api)}
}


@Injectable({providedIn: 'root'})
export class kwAccsSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: kwAccStMdl, msg: kwAccsStMsg, fcty: kwAccsFctyMsg)
    {super(mdl, msg, fcty); }
}
