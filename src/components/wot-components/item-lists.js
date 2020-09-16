import ItemList from "../item-list";
import { withData, withChildFunction } from "../../hocs";
import TankopediaService from "../../services/tankopedia-service";

const { getAllHeavy, getAllMedium, getAllLights, getAllPtSau, getAllSau } = new TankopediaService();

const renderName = (item) => `${item.name}`;

const HeavyList = withData(
    withChildFunction(ItemList, renderName),
    getAllHeavy
);

const MediumList = withData(
    withChildFunction(ItemList, renderName),
    getAllMedium
);

const LightsList = withData(
    withChildFunction(ItemList, renderName),
    getAllLights
);

const PtSauList = withData(
    withChildFunction(ItemList, renderName),
    getAllPtSau
);

const SauList = withData(
    withChildFunction(ItemList, renderName),
    getAllSau
);

export { HeavyList, MediumList, LightsList, PtSauList, SauList };
