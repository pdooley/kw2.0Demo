//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";
import {kwBsMdlStApi,
        kwBsMdlStMdl,
        kwBsMdlStMsg}         from "./kwBsMdlSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwBsMdlFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwBsMdlStApi){super(api);}
}


@Injectable({providedIn: 'root'})
export class kwBsMdlSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: kwBsMdlStMdl, msg: kwBsMdlStMsg, fcty: kwBsMdlFctyMsg)
    {super(mdl, msg, fcty); }
}
