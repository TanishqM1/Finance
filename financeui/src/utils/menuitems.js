import {Taskbar, Transaction, Income, Expense} from './icons'

export const menuitems = [
{
    id: 1,
    title: 'View Transactions',
    icon: Taskbar,
    link: '/Dashboard'
    },

    {
        id: 2,
        title: 'Stocks',
        icon: Transaction,
        link: "/Stocks"
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