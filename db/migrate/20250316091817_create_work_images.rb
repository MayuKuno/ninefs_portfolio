class CreateWorkImages < ActiveRecord::Migration[5.2]
  def change
    create_table :work_images do |t|
      t.references :work, foreign_key: true
      t.string :image
      t.boolean :is_main

      t.timestamps
    end
  end
end
