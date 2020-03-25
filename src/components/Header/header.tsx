import React from 'react';
import Title from './title';
import Tab from './tab';

const Header = (props: any) => (
	<>
		<Title />
		<Tab menus={props.menus} />
	</>
);

export default Header;
