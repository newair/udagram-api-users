export const config = {
  'username': process.env.POSTGRES_USERNAME,
  'password': process.env.POSTGRES_PASSWORD,
  'database': process.env.POSTGRES_DB,
  'host': process.env.POSTGRES_HOST,
  'dialect': 'postgres',
  'aws_region': 'us-east-1',
  'aws_profile': 'udacity-user',
  'aws_media_bucket': 'udacity-monolith',
  'url': 'http://localhost:8100',
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};
