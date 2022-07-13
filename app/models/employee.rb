class Employee < ApplicationRecord
  belongs_to :shop
  validates :name,:surname, :format => { with: /[a-zA-Z ]+/,message: "allows only letters"}
  validates :age , comparison: {greater_than: 18}

end
