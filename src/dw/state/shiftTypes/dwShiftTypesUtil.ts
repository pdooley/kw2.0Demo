//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {dwShiftTypesStApi}      from "./dwShiftTypesSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwShiftTypesFctyMsg extends kwBsFctyMsg
{
    constructor(api: dwShiftTypesStApi){super(api)}
}

