import React from 'react';
import Tab from './tab';

const Header = (props: any) => (
	<>
		<Tab menus={props.menus} />
	</>
);

export default Header;
