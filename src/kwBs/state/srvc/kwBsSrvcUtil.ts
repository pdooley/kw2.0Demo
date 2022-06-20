//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";
import {kwBsSrvcStApi,
        kwBsSrvcStMdl,
        kwBsSrvcStMsg}          from "./kwBsSrvcSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwBsSrvcFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwBsSrvcStApi){super(api);}
}


@Injectable({providedIn: 'root'})
export class kwBsSrvcSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: kwBsSrvcStMdl, msg: kwBsSrvcStMsg, fcty: kwBsSrvcFctyMsg)
    {super(mdl, msg, fcty); }
}
