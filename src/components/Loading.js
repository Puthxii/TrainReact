import React, {Component} from 'react';

class Loading extends Component{

    render(){ 
        let {message, title, children} = this.props;
        return(
            <div>
                { message + " " + title + " "+ children}
            </div>
        )
    }
}



export default Loading;
