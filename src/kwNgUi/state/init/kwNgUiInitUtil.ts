//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBs/fcty/msg/kwBsFctyMsg";
import {kwNgUiInitStApi,
        kwNgUiInitStMdl,
        kwNgUiInitStMsg}        from "./kwNgUiInitSt";
import {kwBsSrvcFormFull}       from "@kwBs/srvc/form/kwBsSrvcFormFull";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwNgUiInitFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwNgUiInitStApi){super(api);}
}


@Injectable({providedIn: 'root'})
export class kwNgUiInitsrvcForm extends kwBsSrvcFormFull
{
    constructor(mdl: kwNgUiInitStMdl, msg: kwNgUiInitStMsg, fcty: kwNgUiInitFctyMsg)
    {super(mdl, msg, fcty);}
}
