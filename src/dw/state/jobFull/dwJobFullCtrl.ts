//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlSubMap}       from "@kwNgUiCtrl/kwNgUiCtrlSubMap";

import {dwJobFullStMap}         from "./dwJobFullSt";
import {dwJobFullsStArr}        from "../jobFulls/dwJobFullsSt";


const sSTATE: string            = "jobFull";

//@formatter:off


@Component({selector: 'dw-job-full-ctrl-map', template: ``})
export class dwJobFullCtrlMap extends kwNgUiCtrlSubMap
{
    constructor(data: dwJobFullsStArr, map: dwJobFullStMap)
    {super(data, map, sSTATE)}
}

