class AddFeaturesToWorks < ActiveRecord::Migration[5.2]
  def change
    add_column :works, :features, :text
  end
end
