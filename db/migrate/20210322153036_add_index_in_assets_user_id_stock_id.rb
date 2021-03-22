class AddIndexInAssetsUserIdStockId < ActiveRecord::Migration[5.2]
  def change
    add_index :assets, [:user_id, :stock_id], unique: true
  end
end
