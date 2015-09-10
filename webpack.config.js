/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-09-06 14:10:33
 * @version $Id$
 */

 module.exports = {
   entry: {
     bundle: './app/app.module.js'
   },
   output: {
     filename: './[name].[hash:8].js'
   },
   module: {
   	loaders: [
   		// { test: /\.css$/, loader: 'style!css?minimize!autoprefixer' },
   		// $ 意思是 .css結尾的
   		 // { test: /\.js$/, loader: 'file?name=app/[hash].[ext]!./app/bundle.js'}
   		
   	]
   }
 };
