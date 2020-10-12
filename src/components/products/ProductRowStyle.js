import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({

    TableRow: {
        '&:nth-child(even)': {
            background: 'rgb(137,208,205)',
        },
        '&:nth-child(odd)': {
            background: 'rgba(137,208,205,0.4)',
        },
        'font-size': '1.4rem',
        'padding-bottom': '0.2rem',
        'padding-top': '0.2rem',
        'padding-left': '1rem',
        'border-bottom': '1px solid #5cc2e1',
    }
}))