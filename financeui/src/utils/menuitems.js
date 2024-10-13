import {Taskbar, Transaction, Income, Expense} from '../utils/icons'

export const menuitems = [
{
    id: 1,
    title: 'Taskbar',
    icon: Taskbar,
    link: '/Taskbar'
    },

    {
        id: 2,
        title: 'View Transactions',
        icon: Transaction,
        link: "/Dashboard"
    },
    {
        id: 3,
        title: 'Incomes',
        icon: Income,
        link: '/Incomes'
    },
    {
        id: 4,
        title: 'Expenses',
        icon: Expense,
        link: '/Expenses'
    }


]