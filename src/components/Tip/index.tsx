import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant={'filled'} {...props} />;

export const Tip = (open: any, type: any) => (
	<Snackbar open={open} autoHideDuration={6000}>
		<Alert severity={type}>
			{`This is a ${type} message!`}
		</Alert>
	</Snackbar>
);

export const Success = (open: any) => Tip(open, 'success');

export const Error = (open: any) => Tip(open, 'error');
