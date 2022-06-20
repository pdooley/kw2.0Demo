//@formatter:off
import { NgModule }                 from '@angular/core';
import { RouterModule }             from '@angular/router';


const routes = [
    {
        path        : 'mgmtPayroll',
        loadChildren: './mgmtPayroll/dwpMgmtPayrollMod#dwpMgmtPayrollMod'
    },
    {
        path        : 'payroll',
        loadChildren: './payroll/dwpPayrollMod#dwpPayrollMod'
    },
    {
        path        : 'billing',
        loadChildren: './billing/dwpBillingMod#dwpBillingMod'
    }
];


@NgModule(
{
    imports :
    [
        RouterModule.forChild(routes),
    ]
})
//@formatter:on
export class dwRprtMod
{
    constructor()
    {
        console.log('dwPageMod::constructor() called.');
    }
}
