class ChangeStocksColumnType < ActiveRecord::Migration[5.2]
  def change
    change_column :stocks, :last_price, 'decimal USING CAST(last_price AS decimal)'
    change_column :stocks, :percent_change, 'decimal USING CAST(percent_change AS decimal)'
  end
end
