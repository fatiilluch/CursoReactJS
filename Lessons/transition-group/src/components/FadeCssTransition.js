import { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import './FadeCssTransition.css'

export default class FadeCssTransition extends PureComponent{
    state = {
        show: false,
    }

    render() {
        return (
            <>
            <button onClick={() => this.setState(state => ({show: !state.show}))}> Change State </button>
            <br/>
            <CSSTransition timeout={10000} in={this.state.show} classNames='my-fade'> 
            <div className='my-fade'>
                    <img src={'https://th.bing.com/th/id/OIP.qOuY2Pd9A3W7JVro1gMuggHaE7?pid=ImgDet&rs=1'} alt="Dog"/>
                </div>
            </CSSTransition>
        </>
        )
    }
}
