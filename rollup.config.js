import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/exitent.js',
  dest: 'dist/exitent.js',
  format: 'umd',
  moduleName: 'Exitent',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true,
      extensions: ['.js']
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel()
  ]
};
