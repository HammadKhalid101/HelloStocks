class CreateAssets < ActiveRecord::Migration[5.2]
  def change
    create_table :assets do |t|
      t.integer :user_id, null: false
      t.integer :stock_id, null: false
      t.integer :quantity, null: false
      t.integer :avg_price, null: false

      t.timestamps
    end
    add_index :assets, [:user_id, :stock_id], unique: true
  end
end
