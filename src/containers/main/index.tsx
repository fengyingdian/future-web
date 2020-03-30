/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Container, NoSsr } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { TopDownAction } from '../../action-components/MountAction/top-down-action';
import { GradientText } from '../../components/Text';
import ResponsibleTriple from '../../components/ArticleSection/responsible-triple';
import ResponsibleTripleReverse from '../../components/ArticleSection/responsible-triple-reverse';
// import Header from './components/Header/header';
import { BottomUpAction } from '../../action-components/MountAction/bottom-up-action';
import MenuBar from './components/MenuBar/index';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		maxWidth: '100%',
		padding: '0',
	},
	headertitle: {
		margin: theme.spacing(1, 0, 1),
		opacity: (props: any) => props.opacity,
	},
	menubar: {
		width: '100%',
		position: 'sticky',
		left: 0,
		top: 0,
		zIndex: 20,
	},
}));

interface Props {
  menus: any,
  sections: any,
}

const Main = (props: Props) => {
	const [state, setState] = useState(1);

	const bindScroll = () => {
  	const gradientText = document.getElementById('intro-page-top-header');
  	if (gradientText) {
  	  const rect = gradientText?.getBoundingClientRect();
			const { bottom, height } = rect;
			const pos = bottom / height;
  		const opacity = pos ** 3;
			if (opacity > 0 && opacity < 3) {
				setState(opacity);
  		}
  	}
	};

	useEffect(() => {
		window.addEventListener('scroll', bindScroll, false);

		return () => window.removeEventListener('scroll', bindScroll, false);
	});

	const classes = useStyles({ opacity: state });
	const { menus, sections } = props;

	return (
		<Container maxWidth={false} className={classes.root}>
			<div id={'intro-page-top-header'} className={classes.headertitle}>
				<NoSsr>
					<TopDownAction>
						<GradientText content={'THE NEXT'} />
					</TopDownAction>
				</NoSsr>
			</div>
			<div className={classes.menubar}>
				<MenuBar menus={menus} />
			</div>
			{sections.map(({ name, id, articles }: any, index: any) => {
				if (index % 2 === 0) {
					return (
						<BottomUpAction>
					    <ResponsibleTriple key={id} name={name} id={id} articles={articles} />
						</BottomUpAction>
					);
				}

				return (
					<TopDownAction>
						<ResponsibleTripleReverse key={id} name={name} id={id} articles={articles} />
					</TopDownAction>
				);
			})}
		</Container>
  	);
};

export default Main;
