import React, { Component } from "react";
import { LightsList, LightsDetails } from "../../wot-components";
import Column from "../../column";
import { withRouter } from "react-router-dom";


class LightsPage extends Component {

    render() {
        const { match, history } = this.props;
        const { id } = match.params;

        return (
            <Column
                top={<LightsList onSelectedItem={(id) => history.push(`/lights/${id}`)} />}
                bottom={<LightsDetails selectedItem={id} />} />)
    }
}

export default withRouter(LightsPage);