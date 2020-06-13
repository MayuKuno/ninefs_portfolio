set -o errexit

if ! command -v node &> /dev/null; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi

if ! command -v yarn &> /dev/null; then
  npm install -g yarn
fi

bundle lock --add-platform x86_64-linux

bundle install
yarn install
bundle exec rails assets:precompile
bundle exec rails assets:clean
