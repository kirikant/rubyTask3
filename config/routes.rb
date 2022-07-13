Rails.application.routes.draw do
  resources :authors
  resources :books
  resources :directors
  resources :employees
  resources :shops
end
