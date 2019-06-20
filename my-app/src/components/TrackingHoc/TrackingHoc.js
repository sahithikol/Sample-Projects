import React from "react";
import Emmiter from "../Emmiter/Emmiter";
const withTracking = (WrappedComponent, trackData) => {
    // ...and returns another component...
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          eventName: '',
          data: {},
          events: []
        };
      }

      componentDidMount() {
        // ... that takes care of the subscription...
        // DataSource.addChangeListener(this.handleChange);
      }

      componentWillUnmount() {
       //  DataSource.removeChangeListener(this.handleChange);
      }

      trackEvent = (eventType, name) => {
        this.subscribe({ type: eventType, name });
        this.setState({
          event: eventType,
          data: name
        });
      }

      subscribe = (data) => {
        const clonedEvents = JSON.parse(JSON.stringify(this.state.events));
        clonedEvents.push(data);
         this.setState({ events: clonedEvents });
      }

    unsubscribe = () => {
        this.setState({ events: [] });
    }

      render() {
        // ... and renders the wrapped component with the fresh data!
        // Notice that we pass through any additional props
        return (<section>
                <Emmiter data={this.state.events} />
            <WrappedComponent
            data={this.state.data}
            event= {this.state.event}
            trackEvent= {this.trackEvent}
            {...this.props} />

            </section>);
      }
    };
  };

  export default withTracking;
