require_relative 'boot'
require 'rails/all'

Bundler.require(*Rails.groups)

module NinefsPortfolio
  class Application < Rails::Application
    config.load_defaults 5.2
    config.time_zone = 'Tokyo'
  end
end
