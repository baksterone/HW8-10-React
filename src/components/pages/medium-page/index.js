import React, { Component } from "react";
import { MediumList, MediumDetails } from "../../wot-components";
import Column from "../../column";
import { withRouter } from "react-router-dom";


class MediumPage extends Component {
    onSelectedItem = (selectedItem) => {
        this.setState({ selectedItem });
    }

    render() {
        const { history, match } = this.props;
        const { id } = match.params;
        return (
            <Column
                top={<MediumList onSelectedItem={(id) => { history.push(`/medium/${id}`); }} />}
                bottom={<MediumDetails selectedItem={id} />} />
            )
    }
}




export default withRouter(MediumPage);