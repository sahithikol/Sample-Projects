import React from "react";

class Emmiter extends React.Component {

    render () {
        const { data } = this.props;
        return (
            <section>
                <header>
                    Published Events:
                </header>
                {data.map(item=> {
                    return <div>{item.type}: {item.name}</div>
                })}
            </section>
        );
    }
}

export default Emmiter;
