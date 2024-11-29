import {Taskbar, Transaction, Income, Expense} from './icons'

export const menuitems = [
{
    id: 1,
    title: 'Home',
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
        title: 'Income Page',
        icon: Income,
        link: '/Incomes'
    },
    {
        id: 4,
        title: 'Expense Page',
        icon: Expense,
        link: '/Expenses'
    }


]