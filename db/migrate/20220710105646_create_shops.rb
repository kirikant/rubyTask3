class CreateShops < ActiveRecord::Migration[7.0]
  def change
    create_table :shops do |t|
      t.string :title
      t.string :address
      t.integer :lock_version
      t.timestamps
    end
  end
end
