import React from 'react';
import withTracking from "../TrackingHoc/TrackingHoc";
import css from "./List.css";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems:[ {
                id:1,
                name: 'Bananas',
            },{
                id:2,
                name: 'Lemons'
            },{
                id:3,
                name: 'Oranges'
            },{
                id:4,
                name: 'Avacados'
            }]
        }
    }

    onClick = (eventType, name) => {
       this.props.trackEvent(eventType, name);
    }

    render() {
        const { listItems } = this.state;
        return (
            <section>
                <header>
                    <h3>Grocery Store</h3>
                </header>
                <ul>
                    {listItems.length && listItems.map(item => {
                    return  (
                        <li key={item.id} className="item">
                            {item.name}
                            <div>
                                <button onClick={() => {
                                    console.log("clicked on start icon")
                                    this.onClick('on favourite', item.name);
                                }}>*</button>
                                <button  onClick={() => {
                                    this.onClick('on add cart', item.name)
                                }}>+</button>
                            </div>
                        </li>
                    )
                    })}
                </ul>
            </section>
        );
    }
}
const TrackedList = withTracking(List)
export default TrackedList;
