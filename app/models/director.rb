class Director < ApplicationRecord
  belongs_to :shop

  validates :name,:surname,:salary ,presence: true
  validates :name,:surname, :format => { with: /[a-zA-Z ]+/,message: "allows only letters"}


end
