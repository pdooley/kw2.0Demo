//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlSubMap}       from "@kwNgUiCtrl/kwNgUiCtrlSubMap";

import {dwSchedFullStMap}       from "./dwSchedFullSt";
import {dwSchedFullsStArr}      from "../schedFulls/dwSchedFullsSt";


const sSTATE: string            = "schedFull";

//@formatter:off


@Component({selector: 'dw-schedule-full-ctrl-map', template: ``})
export class dwSchedFullCtrlMap extends kwNgUiCtrlSubMap
{
    constructor(data: dwSchedFullsStArr, map: dwSchedFullStMap)
    {super(data, map, sSTATE)}
}

