import React from 'react';
import { Panel, PanelHeader, IOS, platform, HeaderButton, Div } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import './tour.css'
const osname = platform();

class CurrentTour extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <Panel id={this.props.id}>
                <PanelHeader
                    left={<HeaderButton onClick={this.props.go} data-to="home">
                        {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                    </HeaderButton>}
                >
                    Тур
                </PanelHeader>
                <Div>
                    <iframe title="tour" className="tour" src={this.props.link} />
                </Div>
            </Panel>
        )
    }
}

export default CurrentTour