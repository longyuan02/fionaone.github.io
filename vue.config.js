// vue.config.jsmodule.exports = {  baseUrl:"",  configureWebpack: {    module:{      rules:[        {          test: /\.md$/,          use: [            'vue-loader',            'fast-vue-md-loader'          ]        },      ]    }  }}