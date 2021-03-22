class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :name, null: false
      t.string :tikr, null: false
      t.string :last_price, null: false
      t.string :percent_change, null: false

      t.timestamps
    end
    add_index :stocks, :name, unique: true
    add_index :stocks, :tikr, unique: true
  end
end
