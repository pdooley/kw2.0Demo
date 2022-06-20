import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'home',
        title    : 'Home',
        translate: 'NAV.HOME',
        type     : 'group',
        icon     : 'home',
        children : [
            {
                id       : 'emplPro',
                title    : 'Employee Profiles',
                translate: 'NAV.EMPLOYEE_PROFILES',
                type     : 'item',
                icon     : 'employee',
                url      : '/dw/employeeProfiles'
            },
            {
                id       : 'hourInp',
                title    : 'Hourly Inputs',
                translate: 'NAV.HOURLY_INPUT',
                type     : 'item',
                icon     : 'clock',
                url      : '/dw/hourlyInput'
            },
            {
                id       : 'schedule',
                title    : 'Schedule',
                translate: 'NAV.SCHEDULE',
                type     : 'item',
                icon     : 'clock',
                url      : '/dw/schedule'
            },
            {
                id       : 'reports',
                title    : 'Reports',
                translate: 'NAV.REPORTS',
                type     : 'collapsable',
                icon     : 'calendar',
                children : [
                    {
                        id   : 'billing',
                        title: 'Billing',
                        translate: 'NAV.REPORT.BILLING',
                        type : 'item',
                        url  : '/dw/report/billing'
                    },
                    {
                        id   : 'mgmtPayroll',
                        title: 'Management Payroll',
                        translate: 'NAV.REPORT.MGMT_PAYROLL',
                        type : 'item',
                        url  : '/dw/report/managementPayroll'
                    },
                    {
                        id   : 'payroll',
                        title: 'Payroll',
                        translate: 'NAV.REPORT.PAYROLL',
                        type : 'item',
                        url  : '/dw/report/payroll'
                    }
                ]
            },
            {
                id: 'crud',
                title: 'Crud',
                translate: 'NAV.CRUD',
                type: 'collapsable',
                icon: 'employee',
                children: [
                    {
                        id: 'companys',
                        title: 'Companys',
                        translate: 'NAV.CRUD.COMPANYS',
                        type: 'item',
                        url: '/dw/crud/companys'
                    },
                    {
                        id: 'employees',
                        title: 'Employees',
                        translate: 'NAV.CRUD.EMPLOYEES',
                        type: 'item',
                        url: '/dw/crud/employees'
                    },
                    {
                        id: 'emplFulls',
                        title: 'Employees Full',
                        translate: 'NAV.CRUD.EMPLOYEES_FULL',
                        type: 'item',
                        url: '/dw/crud/employeeFulls'
                    },
                    {
                        id: 'emplTimes',
                        title: 'Employees Times',
                        translate: 'NAV.CRUD.EMPLOYEES_TIMES',
                        type: 'item',
                        url: '/dw/crud/employeeTimes'
                    },
                    {
                        id: 'jobFulls',
                        title: 'Jobs Full',
                        translate: 'NAV.CRUD.JOB_FULLS',
                        type: 'item',
                        url: '/dw/crud/jobFulls'
                    },
                    {
                        id: 'jobs',
                        title: 'Jobs',
                        translate: 'NAV.CRUD.JOBS',
                        type: 'item',
                        url: '/dw/crud/jobs'
                    },
                    {
                        id: 'jobScheds',
                        title: 'Job Schedules',
                        translate: 'NAV.CRUD.JOB_SCHEDULES',
                        type: 'item',
                        url: '/dw/crud/jobSchedules'
                    },
                    {
                        id: 'metrics',
                        title: 'Metrics',
                        translate: 'NAV.CRUD.METRICS',
                        type: 'item',
                        url: '/dw/crud/metrics'
                    },
                    {
                        id: 'musics',
                        title: 'Musics',
                        translate: 'NAV.CRUD.MUSICS',
                        type: 'item',
                        url: '/dw/crud/musics'
                    },
                    {
                        id: 'provinces',
                        title: 'Provinces',
                        translate: 'NAV.CRUD.PROVINCES',
                        type: 'item',
                        url: '/dw/crud/provinces'
                    },
                    {
                        id: 'reasons',
                        title: 'Reasons',
                        translate: 'NAV.CRUD.REASONS',
                        type: 'item',
                        url: '/dw/crud/reasons'
                    },
                    {
                        id: 'schedFulls',
                        title: 'Schedules Full',
                        translate: 'NAV.CRUD.SCHEDULES_FULL',
                        type: 'item',
                        url: '/dw/crud/scheduleFulls'
                    },
                    {
                        id: 'schedules',
                        title: 'Schedules',
                        translate: 'NAV.CRUD.SCHEDULES',
                        type: 'item',
                        url: '/dw/crud/schedules'
                    },
                    {
                        id: 'shiftTypes',
                        title: 'Shift Types',
                        translate: 'NAV.CRUD.SHIFT_TYPES',
                        type: 'item',
                        url: '/dw/crud/shiftTypes'
                    },
                    {
                        id: 'timeFulls',
                        title: 'Time Sheets Full',
                        translate: 'NAV.CRUD.TIME_SHEETS_FULL',
                        type: 'item',
                        url: '/dw/crud/timeSheetFulls'
                    },
                    {
                        id: 'timeReasons',
                        title: 'Time Sheets Reason',
                        translate: 'NAV.CRUD.TIME_SHEETS_REASON',
                        type: 'item',
                        url: '/dw/crud/timeSheetReasons'
                    },
                    {
                        id: 'timeSheets',
                        title: 'Time Sheets',
                        translate: 'NAV.CRUD.TIME_SHEETS',
                        type: 'item',
                        url: '/dw/crud/timeSheets'
                    }
                ]
            },
            {
                id       : 'contacts',
                title    : 'Contacts',
                translate: 'NAV.CONTACTS',
                type     : 'item',
                icon     : 'account_box',
                url      : '/apps/contacts'
            }
        ]
    }
];
