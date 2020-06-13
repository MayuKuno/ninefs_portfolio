class CreateTechStacks < ActiveRecord::Migration[5.2]
  def change
    create_table :tech_stacks do |t|
      t.string :name, null: false
      t.string :category, null: false
      t.references :work, null: false, foreign_key: true
      t.timestamps
    end
  end
end
