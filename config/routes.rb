Rails.application.routes.draw do
  root to: 'home#index'
  resources :about, only: :index
  resources :works do
    resource :like, only: [:create, :destroy]
  end
end

