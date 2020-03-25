import React, { useState } from 'react';
import {
	Container, Typography, TextField, Button,
} from '@material-ui/core';
import copy from 'copy-to-clipboard';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import useStyles from '../src/theme/styles';

const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant={'filled'} {...props} />;

// eslint-disable-next-line max-len
const generateLink = (type: String) => (link: String) => `flipboardcn://open/${type}?url=${link}&useWKWebView=true&useWebView=true`;

export const OpenLink = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [tipType, setTipType]: [any, any] = useState('success');
	const [openLink, setOpenLink] = useState('');
	const [openItem, setOpenItem] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const link = event.target.value;
		const encodedLink = encodeURIComponent(link);
		setOpenLink(generateLink('link')(encodedLink));
		setOpenItem(generateLink('item')(encodedLink));
	};

	const handleCopy = (text: string) => {
		if (text.length < 5) {
			setTipType('error');
		} else {
			setTipType('success');
			copy(text);
		}
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Container maxWidth={false} className={classes.root}>
			<Typography variant={'h4'} component={'h2'} gutterBottom className={classes.titleMiddle}>
				{'Generate OpenLink'}
			</Typography>
			<Container maxWidth={false} className={classes.leftSide}>
				<TextField
					id={'standard-basic-link'}
					label={'Link'}
					margin={'dense'}
					className={classes.textFiled}
					placeholder={'Paste or Type Your Link'}
					onChange={handleChange}
				/>
				<TextField
					id={'standard-basic-openlink'}
					label={'OpenLink'}
					margin={'dense'}
					className={classes.textFiled}
					value={openLink}
					InputProps={{
						readOnly: true,
					}}
				/>
				<Button variant={'outlined'} color={'primary'} onClick={() => handleCopy(openLink)}>
					{'Copy OpenLink'}
				</Button>
				<TextField
					id={'standard-basic-openlink'}
					label={'OpenItem'}
					margin={'dense'}
					className={classes.textFiled}
					value={openItem}
					InputProps={{
						readOnly: true,
					}}
				/>
				<Button variant={'outlined'} color={'primary'} onClick={() => handleCopy(openItem)}>
					{'Copy OpenItem'}
				</Button>
			</Container>
			<Snackbar
				open={open}
				autoHideDuration={1000}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}>
				<Alert severity={tipType} onClose={handleClose}>
					{tipType === 'success' ? 'Copy Success!' : 'Link Length\'s Too Short!'}
				</Alert>
			</Snackbar>
		</Container>
	);
};

export default OpenLink;
