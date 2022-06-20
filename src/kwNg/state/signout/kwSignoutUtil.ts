//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";
import {kwSignoutStApi,
        kwSignoutStMdl,
        kwSignoutStMsg}         from "./kwSignoutSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwSignoutFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwSignoutStApi){super(api)}
}


@Injectable({providedIn: 'root'})
export class kwSignoutSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: kwSignoutStMdl, msg: kwSignoutStMsg, fcty: kwSignoutFctyMsg)
    {super(mdl, msg, fcty); }
}
