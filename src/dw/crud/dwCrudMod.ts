//@formatter:off
import {NgModule}                 from '@angular/core';
import {RouterModule}             from '@angular/router';


const routes = [
    {
        path        : 'companys',
        loadChildren: './companys/dwpCompanysMod#dwpCompanysMod'
    },
    {
        path        : 'employees',
        loadChildren: './employees/dwpEmployeesMod#dwpEmployeesMod'
    },
    {
        path        : 'employeeFulls',
        loadChildren: './emplFulls/dwpEmplFullsMod#dwpEmplFullsMod'
    },
    {
        path        : 'employeeTimes',
        loadChildren: './emplTimes/dwpEmplTimesMod#dwpEmplTimesMod'
    },
    {
        path        : 'jobFulls',
        loadChildren: './jobFulls/dwpJobFullsMod#dwpJobFullsMod'
    },
    {
        path        : 'jobs',
        loadChildren: './jobs/dwpJobsMod#dwpJobsMod'
    },
    {
        path        : 'jobSchedules',
        loadChildren: './jobScheds/dwpJobSchedsMod#dwpJobSchedsMod'
    },
    {
        path        : 'metrics',
        loadChildren: '@kwNgUi/page/metrics/kwNgUiMetricsMod#kwNgUiMetricsMod'
    },
    {
        path        : 'musics',
        loadChildren: './musics/dwpMusicsMod#dwpMusicsMod'
    },
    {
        path        : 'provinces',
        loadChildren: './provinces/dwpProvincesMod#dwpProvincesMod'
    },
    {
        path        : 'reasons',
        loadChildren: './reasons/dwpReasonsMod#dwpReasonsMod'
    },
    {
        path        : 'scheduleFulls',
        loadChildren: './schedFulls/dwpSchedFullsMod#dwpSchedFullsMod'
    },
    {
        path        : 'schedules',
        loadChildren: './schedules/dwpSchedulesMod#dwpSchedulesMod'
    },
    {
        path        : 'shiftTypes',
        loadChildren: './shiftTypes/dwpShiftTypesMod#dwpShiftTypesMod'
    },
    {
        path        : 'timeSheetReasons',
        loadChildren: './timeReasons/dwpTimeReasonsMod#dwpTimeReasonsMod'
    },
    {
        path        : 'timeSheets',
        loadChildren: './timeSheets/dwpTimeSheetsMod#dwpTimeSheetsMod'
    },
    {
        path        : 'timeSheetFulls',
        loadChildren: './timeFulls/dwpTimeFullsMod#dwpTimeFullsMod'
    }

];

@NgModule({
    imports     : [
        RouterModule.forChild(routes)
    ]
})

//@formatter:on
export class dwCrudMod {

    constructor()
    {
        //console.log('dwCrudMod::constructor() called.');
    }
}
