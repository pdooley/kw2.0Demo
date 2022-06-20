//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";
import {kwBsTokenStApi,
        kwBsTokenStMdl,
        kwBsTokenStMsg}         from "./kwBsTokenSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwBsTokenFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwBsTokenStApi){super(api);}
}


@Injectable({providedIn: 'root'})
export class kwBsTokenSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: kwBsTokenStMdl, msg: kwBsTokenStMsg, fcty: kwBsTokenFctyMsg)
    {super(mdl, msg, fcty); }
}
