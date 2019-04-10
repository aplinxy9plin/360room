import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';

import './tour.css'

class Home extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render(){
		return(
			<Panel id={this.props.id}>
				<PanelHeader>Все туры</PanelHeader>
				
			</Panel>
		)
	}
}

export default Home;
