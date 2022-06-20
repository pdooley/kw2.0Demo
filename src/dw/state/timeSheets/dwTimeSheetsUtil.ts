//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {dwTimeSheetsStApi}      from "./dwTimeSheetsSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwTimeSheetsFctyMsg extends kwBsFctyMsg
{
    constructor(api: dwTimeSheetsStApi){super(api)}
}

