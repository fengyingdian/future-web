/* eslint-disable max-len */
import React from 'react';

interface Props {
  children: any;
}

interface State {
  isShow: Boolean;
}

export class BottomUpAction extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isShow: true,
      });
    });
  }

  render() {
    const { isShow } = this.state;

    return (
			<div>
				{this.props.children}
				<style jsx>
					{`
            div {
              transition: transform 1s, opacity 1s;
              opacity: ${isShow ? 1 : 0};
              transform: translateY(${isShow ? 0 : '200%'});
            }
          `}
				</style>
			</div>
    );
  }
}

export default {};
