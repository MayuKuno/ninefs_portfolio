# config/initializers/load_works.rb
Rails.configuration.x.works_data = -> {
  YAML.load_file(Rails.root.join("config", "works.yml")).map(&:deep_symbolize_keys)
}