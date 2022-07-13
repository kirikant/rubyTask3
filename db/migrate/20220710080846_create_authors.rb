class CreateAuthors < ActiveRecord::Migration[7.0]
  def change
    create_table :authors do |t|
      t.string :name
      t.string :surname
      t.string :style
      t.integer :lock_version
      t.timestamps
    end
  end
end
