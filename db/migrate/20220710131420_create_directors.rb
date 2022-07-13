class CreateDirectors < ActiveRecord::Migration[7.0]
  def change
    create_table :directors do |t|
      t.string :name
      t.string :surname
      t.numeric :salary
      t.references :shop, foreign_key: true
      t.integer :lock_version
      t.timestamps
    end
  end
end
