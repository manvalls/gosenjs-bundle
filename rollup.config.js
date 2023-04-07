import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

export default {
  plugins: [nodeResolve(), terser()],
	input: 'lib/index.js',
	output: {
		file: 'dist/gosen.js',
		format: 'iife'
	},
}
