import React, { Component } from "react";
import { SauList, SauDetails } from "../../wot-components";
import Column from "../../column";
import { withRouter } from "react-router-dom";


class SauPage extends Component {

    render() {
        const { match, history } = this.props;
        const { id } = match.params;

        return (
            <Column
                top={<SauList onSelectedItem={(id) => history.push(`/sau/${id}`)} />}
                bottom={<SauDetails selectedItem={id} />} />)
    }
}

export default withRouter(SauPage);