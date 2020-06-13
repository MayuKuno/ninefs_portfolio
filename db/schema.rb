# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2025_03_16_092150) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "likes", force: :cascade do |t|
    t.bigint "work_id"
    t.string "session_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["work_id"], name: "index_likes_on_work_id"
  end

  create_table "tech_stacks", force: :cascade do |t|
    t.string "name", null: false
    t.string "category", null: false
    t.bigint "work_id", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["work_id"], name: "index_tech_stacks_on_work_id"
  end

  create_table "work_images", force: :cascade do |t|
    t.bigint "work_id"
    t.string "image"
    t.boolean "is_main"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["work_id"], name: "index_work_images_on_work_id"
  end

  create_table "works", force: :cascade do |t|
    t.string "title", null: false
    t.text "description"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "status", default: 0, null: false
    t.string "readme_url", default: "", null: false
    t.string "website_url", default: "", null: false
    t.text "features"
  end

  add_foreign_key "likes", "works"
  add_foreign_key "tech_stacks", "works"
  add_foreign_key "work_images", "works"
end
