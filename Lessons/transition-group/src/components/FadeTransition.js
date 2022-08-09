import { PureComponent } from 'react';
import {Transition} from 'react-transition-group'

const duracion = 300;

const defauyltStyle = {
    transition: `opacity ${duracion}ms ease-in-out`,
    opacity: 0
}

const transitionStyles = {
    entering: { opacity: 1 },
    entered: {opacity: 1},
    exiting: {opacity: 0},
    exited: {opacity: 0},
}

const Fade = ({in: inProp}) => (
    <Transition in={inProp} timeout={duracion}>
        {
            state => (
                <div style={{
                    ...defauyltStyle,
                    ...transitionStyles[state]
                }}>
                    <img src={'https://th.bing.com/th/id/OIP.qOuY2Pd9A3W7JVro1gMuggHaE7?pid=ImgDet&rs=1'} alt="Dog"/>
                </div>
            )
        }
    </Transition>
)

export default class FadeTransition extends PureComponent{
    state = {
        show: false,
    }

    render(){
        return (
            <>
                <button onClick={() => this.setState(state => ({show: !state.show}))}> Change State </button>
                <Fade in={this.state.show} />
            </>
        )
    }
}