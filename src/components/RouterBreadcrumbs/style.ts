
import { Theme, createStyles } from '@material-ui/core';

export default (theme: Theme) => createStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        width: 360,
    },
    lists: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(1),
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
})