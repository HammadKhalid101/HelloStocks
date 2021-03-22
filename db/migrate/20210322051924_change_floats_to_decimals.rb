class ChangeFloatsToDecimals < ActiveRecord::Migration[5.2]
  def change
    change_column :assets, :avg_price, "numeric USING CAST(avg_price AS numeric)"
    change_column :assets, :avg_price, :decimal, precision: 9, scale: 2
    change_column :assets, :quantity, "numeric USING CAST(quantity AS numeric)"
    change_column :assets, :quantity, :decimal, precision: 9, scale: 2
    change_column :stocks, :last_price, "numeric USING CAST(last_price AS numeric)"
    change_column :stocks, :last_price, :decimal, precision: 9, scale: 2
    change_column :stocks, :percent_change, "numeric USING CAST(percent_change AS numeric)"
    change_column :stocks, :percent_change, :decimal, precision: 9, scale: 2
    change_column :users, :buying_power, "numeric USING CAST(buying_power AS numeric)"
    change_column :users, :buying_power, :decimal, precision: 20, scale: 2
  end
end
