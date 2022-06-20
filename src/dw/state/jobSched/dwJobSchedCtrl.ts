//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlSubMap}       from "@kwNgUiCtrl/kwNgUiCtrlSubMap";

import {dwJobSchedStMap}         from "./dwJobSchedSt";
import {dwJobSchedsStArr}        from "../jobScheds/dwJobSchedsSt";


const sSTATE: string            = "jobSched";

//@formatter:off


@Component({selector: 'dw-job-sched-ctrl-map', template: ``})
export class dwJobSchedCtrlMap extends kwNgUiCtrlSubMap
{
    constructor(data: dwJobSchedsStArr, map: dwJobSchedStMap)
    {super(data, map, sSTATE)}
}

