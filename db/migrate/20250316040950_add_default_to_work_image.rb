class AddDefaultToWorkImage < ActiveRecord::Migration[5.2]
  def change
    change_column_default :works, :image, "default_image.png"
    change_column_null :works, :image, false
  end
end
