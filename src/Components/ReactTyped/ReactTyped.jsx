import React,{ Component } from 'react';
// import { render } from 'react-dom';
import Typed from 'react-typed';
 
class ReactTyped extends Component {
    render() {
        return (
            <div>
                <Typed
                    strings={['Hello, My name is _____']}
                    typeSpeed={40}
                />
                <br/>
 
                <Typed
                strings={[
                    'Full Stack Web Developer',
                    'U of A Graduate',
                    'Passion for Front End']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed>
            </div>
        );
    }
}
 

export default ReactTyped;