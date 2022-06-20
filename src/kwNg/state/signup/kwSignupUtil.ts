//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";
import {kwSignupStApi,
        kwSignupStMdl,
        kwSignupStMsg}          from "./kwSignupSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwSignupFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwSignupStApi){super(api)}
}


@Injectable({providedIn: 'root'})
export class kwSignupSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: kwSignupStMdl, msg: kwSignupStMsg, fcty: kwSignupFctyMsg)
    {super(mdl, msg, fcty); }
}
