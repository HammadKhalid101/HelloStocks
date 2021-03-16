class ChangeBuyingPowerColumnConstraint < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:users, :buying_power, true)
  end
end
