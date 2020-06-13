class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.references :work, foreign_key: true
      t.string :session_id

      t.timestamps
    end
  end
end
