class ChangeStocks < ActiveRecord::Migration[5.2]
  def change
    change_column :stocks, :last_price, :integer
    change_column :stocks, :percent_change, :integer
  end
end
