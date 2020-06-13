class RemoveImageFromWorks < ActiveRecord::Migration[5.2]
  def change
    remove_column :works, :image, :string
  end
end
