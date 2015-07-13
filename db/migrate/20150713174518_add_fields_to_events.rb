class AddFieldsToEvents < ActiveRecord::Migration
  def change
    add_column :events, :booking_reference, :string
    add_column :events, :google_location, :json, null: false, default: '{}'
  end
end
