# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150212043820) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "friendship_requests", force: true do |t|
    t.integer  "user_id"
    t.integer  "friendee_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "friendee_name"
    t.string   "requester_name"
  end

  add_index "friendship_requests", ["friendee_id"], name: "index_friendship_requests_on_friendee_id", using: :btree
  add_index "friendship_requests", ["user_id"], name: "index_friendship_requests_on_user_id", using: :btree

  create_table "friendships", force: true do |t|
    t.integer  "user_id"
    t.integer  "friendee_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "user_name"
    t.string   "friendee_name"
  end

  add_index "friendships", ["friendee_id"], name: "index_friendships_on_friendee_id", using: :btree
  add_index "friendships", ["user_id"], name: "index_friendships_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.string   "avatar"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
