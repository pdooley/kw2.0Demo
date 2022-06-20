//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlSubMap}       from "@kwNgUiCtrl/kwNgUiCtrlSubMap";

import {dwTimeReasonStMap}      from "./dwTimeReasonSt";
import {dwTimeReasonsStArr}     from "../timeReasons/dwTimeReasonsSt";


const sSTATE: string        = "timeReason";

//@formatter:off



@Component({selector: 'dw-time-reason-ctrl-map', template: ``})
export class dwTimeReasonCtrlMap extends kwNgUiCtrlSubMap
{
    constructor(data: dwTimeReasonsStArr, map: dwTimeReasonStMap)
    {super(data, map, sSTATE)}
}

