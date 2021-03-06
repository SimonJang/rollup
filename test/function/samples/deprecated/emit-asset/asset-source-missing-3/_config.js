module.exports = {
	description: 'throws when setting an empty asset source',
	options: {
		strictDeprecations: false,
		plugins: {
			name: 'test-plugin',
			buildStart() {
				const assetId = this.emitAsset('test.ext');
				this.setAssetSource(assetId, null);
			}
		}
	},
	error: {
		code: 'PLUGIN_ERROR',
		hook: 'buildStart',
		message:
			'Could not set source for asset "test.ext", asset source needs to be a string of Buffer.',
		plugin: 'test-plugin',
		pluginCode: 'VALIDATION_ERROR'
	}
};
