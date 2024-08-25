import React from "react";

export default class Reel extends React.Component {

    constructor(props) {
        super(props);
        
        const { sequence, className='' } = props;

        this.state = {
            sequence,
            className,
        }

        // The only reason for this being a class
        let path = window.location.pathname;
        document.body.addEventListener('click', () => {
            requestAnimationFrame(() => {
                if(path !== window.location.pathname) {
                    console.log('IT CHANGED ', window.location.pathname);
                    this.setState('url', window.location.pathname);
                }
            });
        }, true);  
    } 

    // check if url changes... 
    // if it does call pressLevel function


    render() {
        const state = this.state;

        return(
            <>
                {state.sequence[0]}
            </>
        );
    }
    
}


    // Create a Reel component
    // As parameter, the Reel will take:
    //     An array `sequence` of objects type:
    //         { element: <Component/>, route: "url_path_to_component" }