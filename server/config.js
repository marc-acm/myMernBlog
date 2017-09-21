const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://marc-acm:qciO7efG3Rgki9HR@cluster0-shard-00-00-eob5s.mongodb.net:27017,cluster0-shard-00-01-eob5s.mongodb.net:27017,cluster0-shard-00-02-eob5s.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
  port: process.env.PORT || 8000,
};

export default config;