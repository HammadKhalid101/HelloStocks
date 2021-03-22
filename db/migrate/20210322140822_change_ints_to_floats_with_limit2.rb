class ChangeIntsToFloatsWithLimit2 < ActiveRecord::Migration[5.2]
  def change
    change_column :stocks, :last_price, :float, :limit => 2
    change_column :stocks, :percent_change, :float, :limit => 2
    change_column :assets, :avg_price, :float, :limit => 2
    change_column :assets, :quantity, :float, :limit => 2
    change_column :users, :buying_power, :float, :limit => 2
  end
end
