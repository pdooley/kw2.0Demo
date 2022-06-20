//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";
import {dwJobStApi,
        dwJobStMdl,
        dwJobStMsg}             from "./dwJobSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwJobFctyMsg extends kwBsFctyMsg
{
    constructor(srvc: dwJobStApi){super(srvc);}
}


@Injectable({providedIn: 'root'})
export class dwJobSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: dwJobStMdl, msg: dwJobStMsg, fcty: dwJobFctyMsg)
    {super(mdl, msg, fcty); }
}
