import React from "react";
import ItemDetails from "../item-details";
import Record from "../Record";
import { withService } from "../../hocs";


const heavyDetails = ({ selectedItem, service }) => {
    const { getHeavy, getHeavyImage } = service;
    return (
        <ItemDetails
            selectedItem={selectedItem}
            getData={getHeavy}
            getImage={getHeavyImage}
        >
            <Record label="Name" field="name" />
            <Record label="Damage" field="damage" />
            <Record label="Breaking Through" field="breakingThrough" />
            <Record label="Weight" field="weight" />
            <Record label="Strength" field="strength" />
            <Record label="Body Armor" field="bodyArmor" />
            <Record label="Tower Armor" field="towerArmor" />
        </ItemDetails>
    );
};


const HeavyDetails = withService(heavyDetails);

const mediumDetails = ({ selectedItem, service }) => {
    const { getMedium, getMediumImage } = service;
    return (
    <ItemDetails
        selectedItem={selectedItem}
        getData={getMedium}
        getImage={getMediumImage}
    >
        <Record label="Name" field="name" />
        <Record label="Damage" field="damage" />
        <Record label="Breaking Through" field="breakingThrough" />
        <Record label="Specific Power" field="specificPower" />
        <Record label="Maximum Speed" field="maximumSpeed" />
        <Record label="Tower Turning Speed" field="towerTurningSpeed" />
    </ItemDetails>
    );
};

const MediumDetails = withService(mediumDetails);


const lightsDetails = ({ selectedItem, service }) => {
    const { getLight, getLightImage } = service;
    return (
    <ItemDetails
        selectedItem={selectedItem}
        getData={getLight}
        getImage={getLightImage}
    >
        <Record label="Name" field="name" />
        <Record label="Overview" field="overview" />
        <Record label="Engine Power" field="enginePower" />
        <Record label="Specific Power" field="specificPower" />
        <Record label="Maximum Speed" field="maximumSpeed" />
    </ItemDetails>
    );
};

const LightsDetails = withService(lightsDetails);


const ptSauDetails = ({ selectedItem, service }) => {
    const { getPtSau, getPtSauImage } = service;
    return (
    <ItemDetails
        selectedItem={selectedItem}
        getData={getPtSau}
        getImage={getPtSauImage}
    >
        <Record label="Name" field="name" />
        <Record label="Damage" field="damage" />
        <Record label="Ammunition" field="ammunition" />
        <Record label="Breaking Through" field="breakingThrough" />
        <Record label="Attachment Time" field="attachmentTime" />
    </ItemDetails>
    );
};

const PtSauDetails = withService(ptSauDetails);


const sauDetails = ({ selectedItem, service }) => {
    const { getSau, getSauImage } = service;
    return (
    <ItemDetails
        selectedItem={selectedItem}
        getData={getSau}
        getImage={getSauImage}
    >
        <Record label="Name" field="name" />
        <Record label="Damage" field="damage" />
        <Record label="Ammunition" field="ammunition" />
        <Record label="Breaking Through" field="breakingThrough" />
        <Record label="Communication Range" field="communicationRange" />
    </ItemDetails>
    );
};

const SauDetails = withService(sauDetails);

export { HeavyDetails, MediumDetails, LightsDetails, PtSauDetails, SauDetails };