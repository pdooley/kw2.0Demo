//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";
import {kwOrgStApi,
        kwOrgStMdl,
        kwOrgStMsg}             from "./kwOrgSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwOrgFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwOrgStApi){super(api)}
}


@Injectable({providedIn: 'root'})
export class kwOrgSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: kwOrgStMdl, msg: kwOrgStMsg, fcty: kwOrgFctyMsg)
    {super(mdl, msg, fcty); }
}
