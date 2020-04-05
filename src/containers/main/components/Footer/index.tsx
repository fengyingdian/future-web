import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
	Box, Typography, Container,
} from '@material-ui/core';
import useCommonStyles from '../../../../theme/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		width: '100%',
		padding: theme.spacing(4, 0),
		background: '#fff',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	linksBox: {
		width: '100%',
	},
	link: {
		fontSize: 12,
		fontWeight: 900,
		lineHeight: '12px',
		height: 12,
		padding: theme.spacing(0, 0.5),
		color: '#a4a4a4',
	},
	info: {
		fontSize: 9,
		fontWeight: 900,
		color: '#d8d8d8',
		margin: theme.spacing(2, 0, 0),
	},
}));

const Footer = () => {
	const classes = useStyles();
	const links = [
		'联系我们',
		'关于我们',
		'网站地图',
	];
	const {
		overflowLine1,
	} = useCommonStyles();

	return (
		<Container maxWidth={false} className={classes.root}>
			<Box
				className={classes.linksBox}
				display={'flex'}
				flexDirection={'row'}
				justifyContent={'center'}
				alignItems={'center'}>
				{links.map((link: string, index: number) => (
					<Typography
						key={index}
						className={`${classes.link} ${overflowLine1}`}
						style={{
							borderRight: index < links.length - 1 ? '1px solid #d8d8d8' : '',
						}}>
						{link}
					</Typography>
				))}
			</Box>
			<Typography className={`${classes.info} ${overflowLine1}`}>
				{'互联网信息服务许可证'}
			</Typography>
			<Typography className={`${classes.info} ${overflowLine1}`}>
				{'Copyright © 2014~2017 人民数字联播网 京ICP备11038424号-2'}
			</Typography>
		</Container>
	);
};

export default Footer;
