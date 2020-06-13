class AddUrlsToWorks < ActiveRecord::Migration[5.2]
  def change
    add_column :works, :readme_url, :string, default: "", null: false
    add_column :works, :website_url, :string, default: "", null: false
  end
end
