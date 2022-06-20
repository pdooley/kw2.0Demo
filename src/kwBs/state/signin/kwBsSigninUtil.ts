//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";
import {kwBsSigninStApi,
        kwBsSigninStMdl,
        kwBsSigninStMsg}        from "./kwBsSigninSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwBsSigninFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwBsSigninStApi){super(api);}
}


@Injectable({providedIn: 'root'})
export class kwBsSigninSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: kwBsSigninStMdl, msg: kwBsSigninStMsg, fcty: kwBsSigninFctyMsg)
    {super(mdl, msg, fcty); }
}
