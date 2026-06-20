import Renderer from '../common/Renderer.js';
import WebGPUBackend from './WebGPUBackend.js';

/**
 * A WebGPU-only renderer variant for applications that exclusively use node
 * materials, node lights and `NoToneMapping`.
 *
 * Unlike {@link WebGPURenderer}, this class does not import the WebGL fallback
 * backend or the standard material/light adapter libraries.
 *
 * @augments Renderer
 */
class WebGPUOnlyRenderer extends Renderer {

	/**
	 * Constructs a new WebGPU-only renderer.
	 *
	 * @param {WebGPURenderer~Options} [parameters] - The configuration parameter.
	 */
	constructor( parameters = {} ) {

		const backend = new WebGPUBackend( parameters );

		super( backend, parameters );

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isWebGPURenderer = true;

		if ( typeof __THREE_DEVTOOLS__ !== 'undefined' ) {

			__THREE_DEVTOOLS__.dispatchEvent( new CustomEvent( 'observe', { detail: this } ) );

		}

	}

}

export default WebGPUOnlyRenderer;
