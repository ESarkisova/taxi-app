import React from 'react'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import {makeStyles} from "@material-ui/core/styles"
import {RootState} from "../../store"
import {CoordType} from "../../store/types"
import {changeAddress} from "../../store/actions"

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: 10,
        marginRight: 10,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

function Form(props: any) {

    const classes = useStyles();

    const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {changeAddress} = props
        changeAddress(e.target.value)
    }

    const getHelperText = !props.isValid && Boolean(props.address) ? 'Введите корректный адрес' : ''

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="address"
                label="Откуда"
                className={classes.textField}
                value={props.address}
                onChange={handleChangeAddress}
                margin="normal"
                variant="outlined"
                error={Boolean(props.address) && !props.isValid}
                helperText={getHelperText}
            />
        </form>)
}

type FormState = {
    address: string
    coord: CoordType
    isValid: boolean
}

const mapStateToProps = (state: RootState): FormState => ({
    address: state.main.address,
    coord: state.main.coord,
    isValid: state.main.isValid,
})

export default connect(mapStateToProps, {changeAddress})(Form);
