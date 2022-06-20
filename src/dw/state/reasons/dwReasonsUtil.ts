//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";

import {dwReasonsStApi}            from "./dwReasonsSt";

//@formatter:off

@Injectable({
    providedIn: 'root'
})
export class dwReasonsFctyMsg extends kwBsFctyMsg
{
    constructor(
        srvc: dwReasonsStApi  )
    {
        super(srvc);
        //console.log("itkGuestreasons::constructor() called.");
    }
}
