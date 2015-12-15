class CreateRoutes < ActiveRecord::Migration
  def change
    create_table :routes do |t|
      t.string :name
      t.integer :time_do

      t.timestamps null: false
    end
  end
end
