class ChangeIntToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :stocks, :last_price, :float
    change_column :stocks, :percent_change, :float
    change_column :assets, :avg_price, :float
    change_column :assets, :quantity, :float
    change_column :users, :buying_power, :float
  end
end
