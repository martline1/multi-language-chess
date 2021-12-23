// eslint-disable-next-line
import { PIXI } from "Resources/pixi.min";

class Loader {
	constructor(_assets = {}) {
		this.resources = {};
		this.textures  = {};
		this.assets    = _assets;
		this.loader    = new PIXI.Loader();

		for (const [assetName, assetUrl] of Object.entries(this.assets)) {
			console.log({ assetName, assetUrl });
			this.loader.add(assetName, assetUrl);
		}

		this.loader.load(((loader, _resources) => {
			this.resources = _resources;
			this.textures  = Object.entries(this.resources).reduce((acc, [resourceName, resourceObj]) => ({
				...acc,
				[resourceName] : resourceObj.texture,
			}), {});
		}).bind(this));
	}

	set textures(value) {}
	set resources(value) {}

	set onComplete(value) {
		this.loader.onComplete.add(value);
	}
}

export default Loader;
