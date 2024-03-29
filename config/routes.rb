# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#           api_user_assets GET    /api/users/:user_id/assets(.:format)                                                     api/assets#index {:format=>:json}
#                           POST   /api/users/:user_id/assets(.:format)                                                     api/assets#create {:format=>:json}
#            api_user_asset GET    /api/users/:user_id/assets/:id(.:format)                                                 api/assets#show {:format=>:json}
#                           PATCH  /api/users/:user_id/assets/:id(.:format)                                                 api/assets#update {:format=>:json}
#                           PUT    /api/users/:user_id/assets/:id(.:format)                                                 api/assets#update {:format=>:json}
#                           DELETE /api/users/:user_id/assets/:id(.:format)                                                 api/assets#destroy {:format=>:json}
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#                api_stocks GET    /api/stocks(.:format)                                                                    api/stocks#index {:format=>:json}
#                 api_stock GET    /api/stocks/:id(.:format)                                                                api/stocks#show {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create] do 
      resources :assets, only: [:index, :show, :create, :update, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :stocks, only: [:show, :index]
  end
  root to: 'static_pages#root'
end
