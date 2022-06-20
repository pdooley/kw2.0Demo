//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsSrvcFormFull}       from "@kwBsSrvc/form/kwBsSrvcFormFull";
import {dwTimeSheetStApi,
        dwTimeSheetStMdl,
        dwTimeSheetStMsg}       from "./dwTimeSheetSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwTimeSheetFctyMsg extends kwBsFctyMsg
{
    constructor(srvc: dwTimeSheetStApi){super(srvc);}
}


@Injectable({providedIn: 'root'})
export class dwTimeSheetSrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: dwTimeSheetStMdl, msg: dwTimeSheetStMsg, fcty: dwTimeSheetFctyMsg)
    {super(mdl, msg, fcty); }
}
