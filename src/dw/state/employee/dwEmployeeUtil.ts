//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";
import {dwEmployeeStApi,
        dwEmployeeStMdl,
        dwEmployeeStMsg}        from "./dwEmployeeSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwEmployeeFctyMsg extends kwBsFctyMsg
{
    constructor(srvc: dwEmployeeStApi){super(srvc);}
}


@Injectable({providedIn: 'root'})
export class dwEmployeeSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: dwEmployeeStMdl, msg: dwEmployeeStMsg, fcty: dwEmployeeFctyMsg)
    {super(mdl, msg, fcty); }
}
