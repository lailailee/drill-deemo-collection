import mongoose from 'mongoose'
import config from './index'

// 创建连接
mongoose.connect(config.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//连接成功回调
mongoose.connection.on('connected', () => {
  console.log('Mongoose connection open to ' + config.DB_URL)
})

//连接异常回调
mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error:' + err)
})

//断开连接回调
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected')
})

export default mongoose
