//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";
import {kwBsCustomStApi,
        kwBsCustomStMdl,
        kwBsCustomStMsg}         from "./kwBsCustomSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwBsCustomFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwBsCustomStApi){super(api);}
}


@Injectable({providedIn: 'root'})
export class kwBsCustomSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: kwBsCustomStMdl, msg: kwBsCustomStMsg, fcty: kwBsCustomFctyMsg)
    {super(mdl, msg, fcty);}
}
