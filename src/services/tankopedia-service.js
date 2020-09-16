export default class TankopediaService {
    _apiBase = "https://cors-anywhere.herokuapp.com/http://gallerytvr.site/api";
  //_apiBase = "http://localhost:3000";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  };

  getAllHeavy = async () => {
    const res = await this.getResource(`/heavy/`);
    console.log(res);
    return res //res.results
      .map(this._transformHeavy);
      
  };

  getAllMedium = async () => {
    const res = await this.getResource(`/medium/`);
    return res //res.results
      .map(this._transformMedium);
  };

  getAllLights = async () => {
    const res = await this.getResource(`/light/`);
    return res.map(this._transformLight);
  };

  getAllPtSau = async () => {
    const res = await this.getResource(`/pt-sau/`);
    console.log(res);
    return res.map(this._transformPtSau);
  };

  getAllSau = async () => {
    const res = await this.getResource(`/sau/`);
    return res.map(this._transformSau);
  };

  getHeavy = async (id) => {
    const heavy = await this.getResource(`/heavy/${id}/`);
    return this._transformHeavy(heavy);
  };

  getMedium = async (id) => {
    const medium = await this.getResource(`/medium/${id}/`);
    return this._transformMedium(medium);
  };

  getLight = async (id) => {
    const light = await this.getResource(`/light/${id}/`);
    return this._transformLight(light);
  };

  getPtSau = async (id) => {
    const pt = await this.getResource(`/pt-sau/${id}/`);
    return this._transformPtSau(pt);
  };

  getSau = async (id) => {
    const sau = await this.getResource(`/sau/${id}/`);
    return this._transformSau(sau);
  };

  getAllPremium = async () => {
    const res = await this.getResource(`/premium/`);
    return res //res.results
      .map(this._transformPremium);
  };

  getPremium = async (id) => {
    const premium = await this.getResource(`/premium/${id}/`);
    return this._transformPremium(premium);
  };

  getHeavyImage = ({ id }) => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/heavy_tanks/${id}.jpg`;
  };

  getMediumImage = ({ id }) => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/medium_tanks/${id}.jpg`;
  };

  getLightImage = ({ id }) => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/lights_tanks/${id}.jpg`;
  };

  getPtSauImage = ({ id }) => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/pt-sau/${id}.jpg`;
  };

  getSauImage = ({ id }) => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/sau/${id}.jpg`;
  };

  _transformPremium = (premium) => {
    return {
      id: premium.id,
      name: premium.name,
      overview: premium.overview,
      rapidity: premium.rapidity,
      strength: premium.strength,
    };
  };

  _transformHeavy = (heavy) => {
    return {
      id: heavy.id,
      name: heavy.name,
      damage: heavy.damage,
      breakingThrough: heavy.breaking_through,
      weight: heavy.weight,
      strength: heavy.strength,
      bodyArmor: heavy.body_armor,
      towerArmor: heavy.tower_armor,
    };
  };

  _transformMedium = (medium) => {
    return {
      id: medium.id,
      name: medium.name,
      damage: medium.damage,
      breakingThrough: medium.breaking_through,
      specificPower: medium.specific_power,
      maximumSpeed: medium.maximum_speed,
      towerTurningSpeed: medium.tower_turning_speed,
    };
  };

  _transformLight = (light) => {
    return {
      id: light.id,
      name: light.name,
      enginePower: light.engine_power,
      maximumSpeed: light.maximum_speed,
      specificPower: light.specific_power,
      overview: light.overview
    };
  };

  _transformPtSau = (pt) => {
    return {
      id: pt.id,
      name: pt.name,
      damage: pt.damage,
      ammunition: pt.ammunition,
      breakingThrough: pt.breaking_through,
      attachmentTime: pt.attachment_time
    };
  };

  _transformSau = (sau) => {
    return {
      id: sau.id,
      name: sau.name,
      damage: sau.damage,
      communicationRange: sau.communication_range,
      ammunition: sau.ammunition,
      breakingThrough: sau.breaking_through
    };
  };
};
