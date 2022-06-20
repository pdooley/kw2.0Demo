//@formatter:off
import { NgModule }                 from '@angular/core';
import { RouterModule }             from '@angular/router';


const routes = [
    {
        path        : 'employeeProfiles',
        loadChildren: './emplPro/dwpEmplProMod#dwpEmplProMod'
    },
    {
        path        : 'hourlyInput',
        loadChildren: './hourInp/dwpHourInpMod#dwpHourInpMod'
    },
    {
        path        : 'schedule',
        loadChildren: './sched/dwpSchedMod#dwpSchedMod'
    }
];

@NgModule(
{
    imports:
    [
        RouterModule.forChild(routes),
    ]
})
//@formatter:on
export class dwPageMod
{
    constructor()
    {
        //console.log('dwPageMod::constructor() called.');
    }
}
