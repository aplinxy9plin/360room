import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View, Panel, PanelHeader, Group, List, Cell, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Persik from './panels/Persik';
import CurrentTour from './panels/CurrentTour'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePanel: 'home',
			fetchedUser: null,
			tours: [
				{
					name: 'Тур 1',
					city: 'Томск',
					link: 'http://360room.ru/tours/1/index.html',
					realtor: 'Этажи'
				},
				{
					name: 'Тур 2',
					city: 'Томск',
					link: 'http://360room.ru/tours/2/index.html',
					realtor: 'Этажи'
				},
				{
					name: 'Тур 3',
					city: 'Томск',
					link: 'http://360room.ru/tours/3/Dima.html',
					realtor: 'Этажи'
				},
				{
					name: 'Тур 4',
					city: 'Томск',
					link: 'http://360room.ru/tours/4/demo.html',
					realtor: 'Этажи'
				}
			],
			link: null
		};
	}

	componentDidMount() {
		var href = window.location.href
		href = href.split('#')
		if(href.length > 1){
			this.setState({
				activePanel: 'tour',
				link: this.state.tours[href[1]].link
			})
		}
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	goTour(e){
		this.setState({link: e.currentTarget.id, activePanel: 'tour'})
	}

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Panel id="home">
					<PanelHeader>Все туры</PanelHeader>
					<Group>
						<List>
							{
								this.state.tours && this.state.tours.map((tour, i) => 
									<Cell
										expandable
										size="l"
										bottomContent={
											<div style={{color: "#909499", fontSize: '13px' }}>
												{"Город: "+tour.city} 
												<br />
												{"Риэлтор: "+tour.realtor}
											</div>
										  }
										onClick={this.goTour.bind(this)}
										id={tour.link}
										key={i}
									>
										{tour.name}
									</Cell>
								)
							}
						</List>
					</Group>
				</Panel>
				<CurrentTour id="tour" link={this.state.link} go={this.go} />
			</View>
		);
	}
}

export default App;
