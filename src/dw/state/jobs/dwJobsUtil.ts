//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";

import {dwJobsStApi}            from "./dwJobsSt";

//@formatter:off

@Injectable({
    providedIn: 'root'
})
export class dwJobsFctyMsg extends kwBsFctyMsg
{
    constructor(
        srvc: dwJobsStApi  )
    {
        super(srvc);
        //console.log("itkGuestjobs::constructor() called.");
    }
}
