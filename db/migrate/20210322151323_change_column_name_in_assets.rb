class ChangeColumnNameInAssets < ActiveRecord::Migration[5.2]
  def change
    remove_column :assets, :stockcrypto_id
    add_column :assets, :stock_id, :integer, null: false
    change_column_null(:assets, :user_id, false)
  end
end
