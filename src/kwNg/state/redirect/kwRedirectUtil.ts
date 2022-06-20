//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";
import {kwRedirectStApi,
        kwRedirectStMdl,
        kwRedirectStMsg}        from "./kwRedirectSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwRedirectFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwRedirectStApi){super(api)}
}


@Injectable({providedIn: 'root'})
export class kwRedirectSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: kwRedirectStMdl, msg: kwRedirectStMsg, fcty: kwRedirectFctyMsg)
    {super(mdl, msg, fcty); }
}
